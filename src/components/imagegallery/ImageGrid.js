/* eslint-disable react/no-unknown-property */
/* eslint-disable @next/next/no-img-element */
import { AnimateSharedLayout, motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { React, useState } from 'react'
import { data } from './Data'
import ImagePopup from './ImagePopup'

const ImageGrid = () => {
  const [popup, setPopup] = useState(false)
  const [layoutId, setLayoutId] = useState(null)
  const poper = (id) => {
    if (popup === false) {
      setLayoutId(id)
      setPopup(!popup)
    } else {
      setPopup(!popup)
      setLayoutId(null)
    }
  }
  return (
    <div>
      <AnimatePresence exitBeforeEnter onExitComplete={() => window.scrollTo(0, 0)}>
        <AnimateSharedLayout>
          <div className='image_grid'>
            {data.map((item) => {
              return (
                <div key={item.id} className='image_card' onClick={() => poper(item.id)}>
                  <motion.img
                    src={`/imagegallery/${item.image}`}
                    className='image_card_single'
                    alt=''
                    width='300'
                    height='300'
                    layoutId={item.id}
                  />
                </div>
              )
            })}
          </div>
          <div className='image_pop_up'>
            {/* AnimatePresence */}
            {popup && <ImagePopup poper={poper} layoutId={layoutId} />}
          </div>
        </AnimateSharedLayout>
      </AnimatePresence>
    </div>
  )
}

export default ImageGrid
