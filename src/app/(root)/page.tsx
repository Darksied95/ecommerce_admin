"use client"
import { Button } from '@/components/ui/button'
import { Modal } from '@/components/ui/modal'

export default function Home() {
  return (
    <div className='p-4'>
      <Modal title="test" description="test desc" isOpen onClose={() => { }}>
        Children
      </Modal>
    </div>
  )
}
