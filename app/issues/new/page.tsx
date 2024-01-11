'use client'
import {TextField,Button } from '@radix-ui/themes'
import {useForm, Controller} from 'react-hook-form';
import SimpleMDE from "react-simplemde-editor";
import axios from 'axios';
import "easymde/dist/easymde.min.css";
import { useRouter } from 'next/navigation';


interface IssueForm {
  title: string,
  description: string
}

const NewIssuePage = () => {
   const {register,control,handleSubmit} = useForm<IssueForm>();
  const router = useRouter();

  return (
    <form
    onSubmit = {()=>handleSubmit(async (data)=>{
      await axios.post('/api/issues',data)
      router.push('/issues')

    })}
    className="max-w-xl space-y-4">
      <TextField.Root>
          <TextField.Input placeholder="Title" {...register('title')}/>
      </TextField.Root>
      <Controller
      name='description'
      control={control}
      render = {({field})=><SimpleMDE placeholder="Description" {...field} />}
      />
      <Button variant="surface">Submit New Issue</Button>
    </form>
  )
}

export default NewIssuePage