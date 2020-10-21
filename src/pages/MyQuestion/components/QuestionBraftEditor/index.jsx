import React from 'react'
import BraftEditor from 'braft-editor'
import 'braft-editor/dist/index.css'
import { uploadImg } from '@/services/myQuestion/create'
import styles from './index.less'


const QuestionBraftEditor = React.memo((props) => {
  const { value, onChange, placeholder } = props
  console.log('render', value)
  const editorChange = (changes) => {
    if (onChange) onChange(changes)
  }
  const upload = (param) => {
    const fd = new FormData()
    fd.append('file', param.file)
    uploadImg(fd).then(res => {
      if (res.code < 300) {
        param.success({
          url: res.data
        })
      } else {
        param.error({})
      }
    })
  }
  return <div className={styles.content}>
    <BraftEditor
      value={value}
      placeholder={placeholder}
      media={{
        uploadFn: upload,
        accepts: {
          video: false,
          accepts: false,
        }
      }}
      onChange={editorChange} />
  </div>
}, (pre, next) => {
  console.log(pre.value)
  return pre.value === next.value
})
const { createEditorState } = BraftEditor
export {
  QuestionBraftEditor,
  createEditorState
} 