'use client'
import {TextField,Button , TextArea} from '@radix-ui/themes'
import { useRouter } from 'next/navigation';

const NewIssuePage = () => {
  const route = useRouter()
  return (
    <div className="max-w-xl space-y-4">
      <TextField.Root>
          <TextField.Input placeholder="Title" />
      </TextField.Root>
      <TextArea placeholder="Description…" />
      <Button  variant="surface" size='4' onClick={()=>route.push('/issues')}>Submit Issue</Button>
    </div>
  )
}

export default NewIssuePage