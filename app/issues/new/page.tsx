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
      <Button highContrast color="iris" variant="surface" size='4' onClick={()=>route.push('/issues')}>Submit</Button>
    </div>
  )
}

export default NewIssuePage