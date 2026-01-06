'use client'

import { Button } from '@/components/ui/button'
import React from 'react'
import { useFormStatus } from 'react-dom'
import {Loader2} from "lucide-react"

export default function SubmitButton() {
    const {pending} = useFormStatus()
  return (
    <>
      {pending ? (
        <Button disabled className='w-full'><Loader2 className="mr-2 h-4 w-4 animate-spin" />Submitting...</Button>
      ) : (
        <Button type="submit" className='w-full'>Submit</Button>
      )}
    </>
  )
}
