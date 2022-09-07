import { AnimateSharedLayout, motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import React from 'react'
import { data } from './Data'

const ImagePopup = ({ poper, layoutId }) => {
  const singleImage = data.find((item) => item.id === layoutId)
  return (
    <div className='pop_up_container'>
      <div className='close_button'>
        <span onClick={poper}>x</span>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className='pop_up_image'
      >
        <motion.img
          className='pop_up_image_single'
          src={`/imagegallery/${singleImage.image}`}
          width='600'
          height='600'
          alt=''
          layoutId={layoutId}
        />
      </motion.div>
    </div>
  )
}

export default ImagePopup
