/* eslint-disable */
import { Input, VStack } from '@chakra-ui/react'
import React from 'react'
import Dropzone from 'react-dropzone'
import PropTypes from 'prop-types'
import Typography from 'components/Typography'

function ExcelDropzone({ title, description, onDrop, ...props }) {
  return (
    <Dropzone
      accept="application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
      maxFiles={1}
      onDrop={onDrop}
    >
      {({ getRootProps, getInputProps }) => (
        <VStack as="div" {...getRootProps()}>
          <Input {...getInputProps()} />
          <Typography variant="typo4" color="gray.0" my={1}>
            {title}
          </Typography>
          <Typography
            variant="typo3"
            color="gray.8"
            style={{ textAlign: 'center', fontWeight: 400 }}
          >
            {description}
          </Typography>
        </VStack>
      )}
    </Dropzone>
  )
}

export default ExcelDropzone

// ExcelDropzone.propTypes = {
//   title: PropTypes.string,
//   description: PropTypes.string,
//   onDrop: PropTypes.func,
// }

// ExcelDropzone.defaultProps = {
//   title: '',
//   description: '',
//   onDrop: () => {},
// }
