'use client'
import {TextField,Button , TextArea} from '@radix-ui/themes'
import { useRouter } from 'next/navigation';
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";




const NewIssuePage = () => {
  const route = useRouter()
  return (
    <div className="max-w-xl space-y-4">
      <TextField.Root>
          <TextField.Input placeholder="Title" />
      </TextField.Root>
      <SimpleMDE placeholder="Description…" />
      <Button  variant="surface" size='4' onClick={()=>route.push('/issues')}>Submit Issue</Button>
    </div>
  )
}

export default NewIssuePage