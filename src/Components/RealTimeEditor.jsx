import React from 'react'
import { Editor } from '@tinymce/tinymce-react'
import { Controller } from 'react-hook-form'

function RealTimeEditor({name, control,  label, defaultValue="Write Your Blog Here..."}) {
  return (
    <div className='w-full'>
      {label && <label className='inline-block mb-1 pl-1 text-black'>{label}</label>}

      <Controller
      name = {name || "Content"}
      /* Hey, 'react-hook-form' library, I want you to take control of this <Editor> component and handle its state for me."*/
      control={control}
      /* Render is a prop-function which receives an object with various properties related to form control.
        One of the Property is "feild".
        Feild is an object that Containts all the properties and methods related to form inputs or feilds such as onChange, onClick etc.  
       */
      render={({field : {onChange}}) => (
        <Editor
        apiKey='u7tc0pbxux161770fam38w9r2ty10lkploh12md603416hc4'
        initialValue={defaultValue}
        init={{
            initialValue: defaultValue,
            height: 500,
            menubar: true,
            plugins: [
                "image",
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "code",
                "help",
                "wordcount",
                "anchor",
            ],
            toolbar:
            "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
            content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
        }}
        onEditorChange={onChange} 
      /*  => The render prop recieved a object as a parameter and this object contains field property.
          The field is also an object.
          This feild object holds various properties and methods that is used to hanlde the form states ( for handle like input fields etc) eg: onChange , onClick , onBlur.

          => onEditorChange={onChange}  in this actually we are passsing the onChange which is extracted from the feild object and this is passing to the onEditorChange.

          => So, whenever the content of the editor changes, the onChange function, which is originally from the field property, will be triggered. This ensures that any changes made in the editor are handled appropriately, likely updating the state of the form field managed by the form library (such as Formik or React Hook Form).
      */
        />
      )}
      />
    </div>
  )
}

export default RealTimeEditor;