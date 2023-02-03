import { useEditor, EditorContent, FloatingMenu } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Heading from '@tiptap/extension-heading'
import Image from '@tiptap/extension-image'

import styles from "./Editor.module.css"
import Cover from './AddCover'


const Editor = () => {

  const content = useEditor({
    extensions: [
      StarterKit,
      Image,
    ],
    content: `
    <p>Hello World! 🌎️</p>
    `,
  })

  const onSave = () => {
    if (!content) {
      return
    }

    console.log(content.getHTML())
  }

  const onAddImage = () => {
    if (!content) {
      return
    }

    const url = window.prompt('URL')

    if (!url) {
      return
    }

    content.chain().focus().setImage({ src: url }).run()
  }

  return (
    <section className={styles.editor}>
      <div className={styles.menu}>
        <div className={styles.commands}>
          <button onClick={onSave}>Save</button>
        </div>
      </div>

      <div className={styles.InputWrapper}>
        <Cover className={styles.Cover}/>

        <fieldset className={styles.TitleForm}>
          <input type="text" name="title" id="title" placeholder='Título'/>
        </fieldset>

        {content && <FloatingMenu editor={content}>
          <button onClick={onAddImage} className={styles.floatingAction}>Add Image</button>
        </FloatingMenu>}
        <EditorContent editor={content} className={styles.input} />
      </div>
    </section>
  )
}

export default Editor;