'use client'
import {TextField } from '@radix-ui/themes'

const NewIssuePage = () => {
  return (
    <TextField.Root>
        <TextField.Input placeholder="Title" />
    </TextField.Root>
  )
}

export default NewIssuePage