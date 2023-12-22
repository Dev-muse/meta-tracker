import React from 'react'
import {Button} from '@radix-ui/themes'
import Link from 'next/link'


const IssuesPage = () => {
  return (
    <div>
      <Button color="iris" variant="solid"
       size='4'>
        <Link href="/issues/new">New Issue</Link>
      </Button>

    </div>

  )
}

export default IssuesPage