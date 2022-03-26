/* eslint-disable */
import React from 'react'
import Color from 'color'
import styled from 'styled-components'
import { DialogDisclosure, useDialogState } from 'reakit/Dialog'
import Card from 'components/Card'
import IconButton from 'components/IconButton'
import Modal from 'components/Modal'
import Typography from 'components/Typography'
import { SmallAddIcon } from '@chakra-ui/icons'
import ExcelDropzone from './ExcelDropzone'
import PricelistApi from 'hooks/PricelistApi'

async function processFile(files) {
  console.log("Dropzone Processing File")
  var file = files[0]
  var formData = new FormData()
  formData.append("pricelist", file)

  var api = new PricelistApi();
  try {
    var response = await api.makeRequest("POST", "/api/upload", formData)
    // code below here will only execute when await makeRequest() finished loading
    console.log(response);
  }
  catch (e) {
    console.error(e);
  }
}

const StyledCard = styled(Card)`
  width: 100%;
  padding: 20px 12px;
  border-radius: 20px;
  height: 200px;
  box-shadow: none;
  transition: box-shadow 300ms;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-width: 2px;  
  border-style: dashed;
  border-color: ${(p) => Color(p.theme.colors.gray[1]).alpha(0.3)};

  &:hover,
  &:focus {
    outline: none;
    box-shadow: 0px 0px 30px ${(p) => Color(p.theme.colors.gray[0]).alpha(0.1)};
  }
`

const DropzoneCard = () => (
  <StyledCard style={{ textDecoration: 'none' }} flex="1">
      <ExcelDropzone
        title="*.xls and *.xlsx"
        description="Drag 'n' drop the pricelist here, or click to select the file"
        onDrop={processFile}
      />
  </StyledCard>
)

const CardsContainer = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  > a + a {
    margin-left: 20px;
  }
`

const PricelistCenter = () => {
  const dialog = useDialogState()
  return (
    <>
      <DialogDisclosure {...dialog}>
        {(props) => (
          <IconButton
            color="main.default"
            variant="bordered"
            aria-label="import pricelist"
            style={{ width: 26, height: 26 }}
            {...props}
          >
            <SmallAddIcon />
          </IconButton>
        )}
      </DialogDisclosure>
      <Modal
        title="Pricelist Center"
        dialog={dialog}
        ariaLabel="Pricelist Center"
        style={{ paddingBottom: 56 }}
      >
        <Typography variant="typo11" color="gray.6">
          You can update the latest pricelist here
        </Typography>
        <CardsContainer>
          <DropzoneCard />
        </CardsContainer>
      </Modal>
    </>
  )
}

export default PricelistCenter
