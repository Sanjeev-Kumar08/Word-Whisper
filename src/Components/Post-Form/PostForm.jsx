import React, { useCallback, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import service from '../../Service/Services';
import RealTimeEditor from '../RealTimeEditor';
import Input from '../Input';
import Select from '../Select';
import Button from '../Button';

function PostForm({post}) {

/*  The register function provided by useForm() is used to register each input field in your form. 
    By registering inputs, React Hook Form internally manages their state and validation. 
    This registration process tells React Hook Form which inputs to watch for changes, validate, and gather data from when the form is submitted.
*/

    const {register, handleSubmit, watch, setValue, getValues, control} = useForm({
        defaultValues:{
            title: post?.title || "",
            slug: post?.slug || "",
            status: post?.status || "active",
            content: post?.content || "Write Your Blog Here..."
        }
    });

    const navigate = useNavigate();
    const userData = useSelector((state) => state.auth.userData);    
    const userStatus = useSelector(state => state.auth.status)
    console.log(post)

    // Submit.... (1: User is Updating the Post or 2: User is Creating New Post)
    const submit = async(data) => { // Data is the thing that a user have given while adding or updating post
      console.log(`Post Submission Test!!`)
      console.log(data)
      console.log(userStatus)

      // *******User is Updating post (post already exist)********
        if(post){
          console.log(`User Data : ${userData}`)
          console.log(`post Exists`)
            // Take the image from the user and Upload it to the Appwrite Service if it exits (user has entered the image)
            const file = data.featureImage[0] ? await service.uploadFile(data.featureImage[0]) : null;

            // If user have uploaded new Image (ie, file exists) then Delete the old image of the post (featuredImage)
            if(file){
              await service.deleteFile(post.featureImage);
            }

            const dB_UpdatePost = await service.updatePost(post.$id,{
              // Passing all the data as it is and overwriting a prop ie, featureImage;
              ...data,
              featureImage : file ? file.$id : undefined
            })

            // Re-Direct the User !!
            if(dB_UpdatePost){
              navigate(`/post/${dB_UpdatePost.$id}`)
            }
        }

        // ******User is Adding New post (post do not exist)******
        else{
          console.log(`Post Not Exists`)
          console.log(`User Data : ${userData.$id}`)
          
          const file = await service.uploadFile(data.
            featureImage[0]);  // Uploading the Image

         if(file){ // If FIle exist create a new Post
          const dB_NewPost = await service.createPost({
            ...data,
            userId : userData.$id,
            featureImage: file.$id
          })

          if(dB_NewPost){
            navigate(`/post/${dB_NewPost.$id}`);
          }
         }
        }
    }

    // "     THis is My bloG        "  => "this-is-my-blog"     
    const createSlug = useCallback((title) => {
      if(title && typeof title === 'string') 
      return title
        .trim() // Removes ehite spaces from end and start
        .toLowerCase() 
        .replace(/[^a-zA-Z\d]+/g, '-') // Convert all characters other than a-z, A-Z and digits into "-".
      
      return ""  // Return "" if no value in the title.
    }, [])

    /* Watch will constantly keep track on the input field where it will be passes as a prop.
      It typically takes one or more arguments, such as the name of the field to watch or an array of field names. When called without any arguments, it often watches all form fields. */
    useEffect(()=>{
      const subscription = watch((value , {name})=>{ // Value contains all the info. about post like title, slug, image
        if(name === 'title'){  // name is the property of value object which has triggered the callback. (which has been changed in the PostForm like title or content or image)
          setValue('slug' , createSlug(value.title , {shouldValidate : true})) // Setting the value of slug from "createSlug"
        }
      })

    return () => subscription.unsubscribe(); // For Optimization
    } , [watch, createSlug, setValue])

  return (
    <form onSubmit={handleSubmit(submit)} className='flex flex-wrap'>
      {/* Left Div */}
      <div className='w-2/3 px-2'>
        {/* Title */}
        <Input
          label = "Title"
          placeholder = "Enter Title Here"
          className="mb-4"
          {...register('title' , {required: true})}
          onInput = {(e)=>{
            setValue("slug" , createSlug(e.currentTarget.value, { shouldValidate: true }))
          }}
        />

{/* The onInput event in JavaScript is triggered whenever the value of an input element changes. This event is similar to the onChange event, but it fires more frequently, even while the user is still typing or interacting with the input field. */}
        {/* Slug */}
        <Input
          label ="Slug"
          placeholder= "Slug..."
          className = "mb-4"
          {...register("slug" , {required: true})}
        />

        {/* Real Time Editor */}
        <RealTimeEditor
          label="Content" 
          name="content" 
          control={control} 
          defaultValue={getValues("content")}
        />

      </div>
      {/* Right Div */}
      <div className='w-1/3 px-2'>

        {/* Featured image */}
        <Input
          label = "Featured Image: "
          type = "file"
          accept = "image/png, image/jpg, image/jpeg"
          {...register('featureImage' , {required : !post})}
        />
        { /*{required : !post}: checks if post is already available then there will be a featuredImage also so it is not compulsory for the user to upload a new FeaturedImage. But if post is false, means user is adding a newPost then featuredImage should be required!! */ }

    {/* if post exists display the Featued Image of the Post  */}
        {post && (
          <div className='w-full mb-4'>
            <img 
            src={service.getFilePreview(post.featureImage)}
            alt={post.title}
            className="rounded-lg"
            />
          </div>
          // <div>Post Exists</div>
        )}

          {/* Status of the Post : Active or In-Active */}
        <Select
          label = "Status"
          options = {["active" , "inactive"]}
          className = "mb-4"
          {...register("status" , {required: true})}
        />

          {/* Submit Button */}
        <Button
          buttonText= {post ? "Update" : "Submit"}
          type='submit'
          className='w-full hover:bg-blue-700'
        />
      </div>
    </form>
  )
}

export default PostForm;