import axios from "axios"
import { NotFoundException } from "@nestjs/common"

import { document as documentMessage } from "./../../app/dictionaries/document.dictionary"

axios.defaults.headers = {
  ContentType: "application/json",
}

export const fetchNIF = (nif: string) =>
  axios.post(process.env.SCRAPPER_URL, { nif }).then(({ data }) => {
    if (data.retorno.cod !== 200) {
      throw new NotFoundException(documentMessage.notFound(nif))
    }

    return {
      number: data.data.nif,
      name: data.data.nome,
    }
  })

export const fetchBI = (bi: string) =>
  axios.get(`${process.env.VALIDATE_BI}?bi=${bi}`).then(({ data: apiResponse }) => {
    if (!apiResponse.sucess) {
      throw new NotFoundException(documentMessage.notFound(bi))
    }

    return {
      number: apiResponse.data.numero,
      name: apiResponse.data.nome
    }
  })
