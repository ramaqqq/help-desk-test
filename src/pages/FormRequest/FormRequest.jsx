import { Button } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";

export default function FormRequest({
  formData,
  setFormData,
  Incident,
  Problem,
  Request,
  dataRequest,
  handleSubmit,
  name,
}) {
  // const [name] = useState(
  //   localStorage.getItem("fullname")
  //   )
  // getting stored value

  return (
    <div>
      <form className="row g-3" onSubmit={handleSubmit}>
        <div>
          <label for="inputState" className="form-label">
            #Ticket :
          </label>
          <select
            id="inputState"
            className="form-select"
            name="ticket"
            value={formData.ticket}
            onChange={(event) =>
              setFormData({ ...formData, ticket: event.target.value })
            }
            required
          >
            <option selected>Choose...</option>
            <option readOnly="true">{Incident}</option>
            <option readOnly="true">{Problem}</option>
            <option readOnly="true">{Request}</option>
          </select>
        </div>

        <div>
          <label for="inputPassword4" className="form-label">
            Customer Name :
          </label>
          <input
            type="text"
            className="form-control"
            id="inputPassword4"
            name="customer"
            required
            disabled
            value={name}
            onChange={(event) =>
              setFormData({ ...formData, caseOwner: event.target.value })
            }
          />
        </div>

        <div>
          <label for="inputState" className="form-label">
            Sender Name :
          </label>
          <select
            id="inputState"
            className="form-select"
            name="caseowner"
            required
            value={formData.senderName}
            onChange={(event) =>
              setFormData({ ...formData, senderName: event.target.value })
            }
          >
            <option selected>160k...</option>
            <option selected>Aptana...</option>
            <option selected>Connexist...</option>
            <option selected>DartMedia...</option>
            <option selected>DWS...</option>
            <option selected>Emobile...</option>
            <option selected>Integra...</option>
            <option selected>Kreasi...</option>
            <option selected>MDM...</option>
            <option selected>Monty...</option>
            <option selected>Nadyne...</option>
            <option selected>Nexmo...</option>
            <option selected>Orion...</option>
            <option selected>RIK...</option>
            <option selected>Svideo...</option>
            <option selected>Telin...</option>
            <option selected>Verihubs...</option>
            <option selected>WCZ...</option>
            <option selected>Yessly...</option>
            <option selected>BNT...</option>
            <option selected>Narindo...</option>
          </select>
        </div>

        <div>
          <select
            id="inputState"
            className="form-select"
            name="caseowner"
            required
            value={formData.senderName}
            onChange={(event) =>
              setFormData({ ...formData, senderName: event.target.value })
            }
          >
            <option selected>160k...</option>
            <option>Dana</option>
            <option>pLazada</option>
            <option>CITIBANK</option>
            <option>pKPintar</option>
            <option>pPrakerja</option>
            <option>pOVO</option>
            <option>pTOKOPEDIA</option>
            <option>pBNC</option>
            <option>pTIX ID</option>
            <option>pUANGME</option>
            <option>pATOME</option>
            <option>pEasycash</option>
            <option>Kredivo</option>
            <option>pBukuWarung</option>
            <option>pRupiahCepat</option>
            <option>pGrab</option>
            <option>pGojek</option>
            <option>pASETKU</option>
            <option>pMPL ID</option>
            <option>pEasyNote</option>
            <option selected>Aptana...</option>
            <option>Motorku X</option>
            <option>SPIL</option>
            <option>bjbKPR</option>
            <option>pBANKSULUTGO</option>
            <option>pDAYAAUTO</option>
            <option>pBromPit</option>
            <option>pWahanaHonda</option>
            <option>pBPJSKKUPANG</option>
            <option>BNI SKK Smg</option>
            <option>pRSOS.SBY</option>
            <option>pDANANAGOYA</option>
            <option>pYAKESTELKOM</option>
            <option>BHC Bandung</option>
            <option>pAROFAHMINA</option>
            <option>pKEDUNG_ARTO</option>
            <option>pBPN_SMD</option>
            <option>pPOLONIA HTL</option>
            <option>KPP_PALOPO</option>
            <option>pUT PALANGKA</option>
            <option selected>Connexist...</option>
            <option>pLazada</option>
            <option>pBNC</option>
            <option>pASUS</option>
            <option>pHuawei</option>
            <option>pOPPO</option>
            <option>pVIVO</option>
            <option selected>DartMedia...</option>
            <option>CITIBANK</option>
            <option>pCIMBNIAGA</option>
            <option>FIFGROUP</option>
            <option>pHSBC</option>
            <option>pB-SULSELBAR</option>
            <option>pBPD Jatim</option>
            <option>pCITIBANK</option>
            <option>IndahLogstk</option>
            <option>BPD Kaltim</option>
            <option>IMFI</option>
            <option>pUANGME</option>
            <option>pBANK JAMBI</option>
            <option>pBANK_BPDDIY</option>
            <option>pAdaPundi</option>
            <option>BPRKS</option>
            <option>digibankDBS</option>
            <option>pB-Sampoerna</option>
            <option>pStanChart</option>
            <option>pSIGNAL</option>
            <option>pFIFGROUP</option>
            <option selected>DWS...</option>
            <option>pBRI-NOTIF</option>
            <option>pPEDULICOVID</option>
            <option>pIndiHome</option>
            <option>pBPJAMSOSTEK</option>
            <option>pBRI-OTP</option>
            <option>pLinkAja</option>
            <option>BRINS</option>
            <option>pDANA</option>
            <option>pLazada</option>
            <option>pMyPertamina</option>
            <option>pKeepList</option>
            <option>pBPDKALTMTRA</option>
            <option>pAdaKami</option>
            <option>pPermataBank</option>
            <option>pBRI-INFO</option>
            <option>pBRILife</option>
            <option>pBTN Syariah</option>
            <option>pBNI</option>
            <option>pBankBTN</option>
            <option selected>Emobile...</option>
            <option>pMaybank</option>
            <option>MAYAPADA</option>
            <option>pBANKSUMUT</option>
            <option selected>Integra...</option>
            <option>pBRI-NOTIF</option>
            <option>BRI-NOTIF</option>
            <option selected>Kreasi...</option>
            <option>pLazada</option>
            <option selected>MDM...</option>
            <option>pBRI-NOTIF</option>
            <option>pLinkAja</option>
            <option>pDANA</option>
            <option>pBCA</option>
            <option>pRupiahCepat</option>
            <option>pMyPertamina</option>
            <option>pKPintar</option>
            <option>pBPJAMSOSTEK</option>
            <option>BNI</option>
            <option>pTIX ID</option>
            <option>pOLX</option>
            <option>pATOME</option>
            <option>pBNC</option>
            <option>pKTA Kilat</option>
            <option>pASETKU</option>
            <option>BTN Syariah</option>
            <option>pEasycash</option>
            <option>BRILife</option>
            <option>pPrakerja</option>
            <option selected>Monty...</option>
            <option>JULO</option>
            <option>pBantuSaku</option>
            <option>pBPDKALTMTRA</option>
            <option>pLazada</option>
            <option>pBareksa</option>
            <option>ONDA</option>
            <option>pKUPU</option>
            <option>KEMENPERIN</option>
            <option>pHOLYWINGS</option>
            <option>pBANK MAYORA</option>
            <option>pHADIRR.COM</option>
            <option>pUT PALANGK</option>
            <option>pARTAKU</option>
            <option>pINDOPASIFIK</option>
            <option>rMandiri.sc</option>
            <option>pTDNUSANTAR</option>
            <option>pYAKESTELKOM</option>
            <option>TUTUR GANDA</option>
            <option>pDANA MULIA</option>
            <option>BPRWMJ</option>
            <option selected>Nadyne...</option>
            <option>pGojek</option>
            <option>pKredivo</option>
            <option>pDANA</option>
            <option>pTOKOPEDIA</option>
            <option>pShopee</option>
            <option>pOVO</option>
            <option>pAkulaku</option>
            <option>pShopeePay</option>
            <option>pKUDO</option>
            <option>pPJMGAMPANG</option>
            <option>pBNC</option>
            <option>pTRAVELOKA</option>
            <option>pBFI Finance</option>
            <option>OneAset</option>
            <option>pBankMandiri</option>
            <option>pGrab</option>
            <option>KeepList</option>
            <option>pSAMSUNG</option>
            <option>pSeaBank</option>
            <option selected>Nexmo...</option>
            <option>pJago</option>
            <option>pKredivo</option>
            <option>pKUDO</option>
            <option>pAlodokter</option>
            <option>pMOKA</option>
            <option>pUKUINDO</option>
            <option>pLalamove</option>
            <option>pJENIUS</option>
            <option>pKoinWorks</option>
            <option>pDeliveree</option>
            <option>pJULO</option>
            <option>pCodapay</option>
            <option>pFave</option>
            <option>pShopback</option>
            <option>pTIX ID</option>
            <option>pTaniHub</option>
            <option>pChope</option>
            <option>pBareksa</option>
            <option>pKASKUS</option>
            <option>pPOPBOX-ASIA</option>
            <option selected>Orion...</option>
            <option>pGojek</option>
            <option>pKUDO</option>
            <option selected>RIK...</option>
            <option>pShopee</option>
            <option>pSvideo</option>
            <option>pSeaBank</option>
            <option>pAkulaku</option>
            <option selected>Svideo...</option>
            <option>pLazada</option>
            <option>pKPintar</option>
            <option>pTOKOPEDIA</option>
            <option>pRupiahCepat</option>
            <option>pSvideo</option>
            <option>pATOME</option>
            <option>pAdaPundi</option>
            <option>AdaKami</option>
            <option>Gojek</option>
            <option>pUANGME</option>
            <option>pEasyNote</option>
            <option>pSNACKVIDEO</option>
            <option>pUatas</option>
            <option selected>Telin...</option>
            <option>Grab</option>
            <option>pBukuWarung</option>
            <option>pMigo</option>
            <option>pMigo</option>
            <option>pBukalapak</option>
            <option>pModalku</option>
            <option>LUNO</option>
            <option>HonestDoc</option>
            <option>pMAKMUR</option>
            <option>GOWORK</option>
            <option>JURNALID</option>
            <option>HALODOC</option>
            <option>pCarro</option>
            <option>pVIDA</option>
            <option>pGLINTS</option>
            <option>pGLINTS</option>
            <option>NUFARM</option>
            <option>pVINMO</option>
            <option>pPALAPA</option>
            <option>ZAHIRA</option>
            <option selected>Verihubs...</option>
            <option>pJOY-JD.id</option>
            <option>pDanabijak</option>
            <option>pPAYFAZZ</option>
            <option>pEvermos</option>
            <option>pTitipku</option>
            <option>pPF Master</option>
            <option>pQRAVED</option>
            <option>pRukita</option>
            <option>pBukugaji</option>
            <option>FLASHCOFFEE</option>
            <option>pTRANSFEZ</option>
            <option>pKlikoo</option>
            <option>pCrediBook</option>
            <option>pJakmall.com</option>
            <option>pNEU</option>
            <option>pKanggo</option>
            <option>pInfokost</option>
            <option>pPOST. App</option>
            <option>pPosy</option>
            <option>pCrediStore</option>
            <option selected>WCZ...</option>
            <option>pLazada</option>
            <option>pDUTAJAMAN</option>
            <option>DUTA MESIN</option>
            <option>DUTAMONEY</option>
            <option>pDatsun</option>
            <option>pARMADA FIN</option>
            <option>pAsakita</option>
            <option>pASC KITA</option>
            <option>pBATAKANASRI</option>
            <option>pBatavia Air</option>
            <option>BASSURACITY</option>
            <option>BATAVIAFIN</option>
            <option>BATIKNYINDO</option>
            <option>pArisanKu</option>
            <option>pArjunaweda</option>
            <option selected>Yessly...</option>
            <option>pTEMAN PRIMA</option>
            <option selected>BNT...</option>
            <option>pDYNAMIX</option>
            <option>pEasycash</option>
            <option>pSeaBank</option>
            <option>pSvideo</option>
            <option>pLazada</option>
            <option>pMKInspektur</option>
            <option>pMK HAK</option>
            <option>pMK Humas</option>
            <option>pPMI PKU</option>
            <option>pDPUPR</option>
            <option>pKPU LAMPUNG</option>
            <option>pMK Umum</option>
            <option>pDPMPTSP.BDG</option>
            <option>pPDAM SITARO</option>
            <option>pKPPN BDG II</option>
            <option>pGA SOLO</option>
            <option>pMKInspektor</option>
            <option>pKPP TEBET</option>
            <option>pMK Panitera</option>
            <option>pPAJAK_WNSRI</option>
            <option selected>Narindo...</option>
            <option>pNARINDO</option>
            <option>pSimas Jiwa</option>
            <option>pWispay</option>
            <option>pSIMINVEST</option>
            <option>As_SinarMas</option>
            <option>SIMAS TECH</option>
            <option>pStarPoin</option>
            <option>pAldiracita</option>
          </select>
        </div>

        {/* <div>
        <label for="inputPassword4" className="form-label">
          Case Owner :
        </label>
            <input
              type="text"
              className="form-control"
              id="inputPassword4"
              name="caseowner"
              required
              value={formData.caseowner}
              onChange={(event) =>
                setFormData({ ...formData, 
                caseowner: event.target.value })
                }
              />
        </div> */}

        {/* <div>
        <label for="inputPassword4" className="form-label">
          Customer Name :
        </label>
              <input
                type="text"
                className="form-control"
                id="inputPassword4"
                name="customer"
                required
                value={formData.customer}
                onChange={(event) =>
                    setFormData({ ...formData, 
                    customer: event.target.value })
                    }
                />
        </div> */}

        {/* <div>
        <label for="inputPassword4" className="form-label">
          Sender Name :
        </label>
            <input
              type="text"
              className="form-control"
              id="inputPassword4"
              name="senderName"
              required
              value={formData.senderName}
              onChange={(event) =>
                  setFormData({ ...formData, 
                  senderName: event.target.value })
                  }
              />
        </div> */}

        <div>
          <label for="inputState" className="form-label">
            Origin :
          </label>
          <select
            id="inputState"
            className="form-select"
            name="origin"
            required
            value={formData.origin}
            onChange={(event) =>
              setFormData({ ...formData, origin: event.target.value })
            }
          >
            <option selected>Choose...</option>
            <option>Phone</option>
            <option>Whatsapp</option>
            <option>Email</option>
          </select>
        </div>

        <div>
          <label id="title" for="inputPassword4" className="form-label">
            Date Time :
          </label>
          <input
            type="text"
            className="form-control"
            id="inputPassword4"
            name="date"
            //   value = {dateTime}
            readOnly="true"
            value={formData.date}
            onChange={(event) =>
              setFormData({ ...formData, date: event.target.value })
            }
          />
        </div>

        <div className="col-md-4">
          <label for="inputState" className="form-label">
            Category :
          </label>
          <select
            id="inputState"
            className="form-select"
            name="category"
            required
            value={formData.category}
            onChange={(event) =>
              setFormData({ ...formData, category: event.target.value })
            }
          >
            <option selected>Choose...</option>
            <option>Data</option>
            <option>Network</option>
            <option>Service</option>
            <option>Request</option>
          </select>
        </div>

        <div className="col-md-4">
          <label for="inputState" className="form-label">
            Sub-Category :
          </label>
          <select
            id="inputState"
            className="form-select"
            name="subcategory"
            required
            value={formData.subcategory}
            onChange={(event) =>
              setFormData({ ...formData, subcategory: event.target.value })
            }
          >
            <option selected>Choose...</option>
            <option>Delivery Status</option>
            <option>Tidak terima di HP</option>
            <option>Down</option>
            <option>Latency</option>
            <option>DB</option>
            <option>IO</option>
            <option>Diamond</option>
            <option>New Customer</option>
            <option>New Sender</option>
            <option>New DB</option>
          </select>
        </div>

        <div>
          <label id="title" for="inputPassword4" className="form-label">
            Title :
          </label>
          <input
            type="text"
            className="form-control"
            id="inputPassword4"
            name="title"
            required
            value={formData.title}
            onChange={(event) =>
              setFormData({ ...formData, title: event.target.value })
            }
          />
        </div>

        <div>
          <label id="description" for="inputPassword4" className="form-label">
            Description :
          </label>
          <textarea
            className="form-control"
            placeholder="Leave a comment here"
            id="deskripsi"
            name="description"
            required
            value={formData.description}
            onChange={(event) =>
              setFormData({ ...formData, description: event.target.value })
            }
          ></textarea>
        </div>

        <div>
          <label for="inputPassword4" className="form-label">
            Action :
          </label>
          <input
            type="text"
            className="form-control"
            id="action"
            name="action"
            required
            value={formData.action}
            onChange={(event) =>
              setFormData({ ...formData, action: event.target.value })
            }
          />
        </div>

        <div>
          <label for="formFile" className="form-label">
            Upload File :
          </label>
          <input
            name="upload"
            className="form-control"
            type="file"
            id="formFile"
            required
            value={formData.file}
            onChange={(event) =>
              setFormData({ ...formData, file: event.target.value })
            }
          />
        </div>

        <br />

        <Button
          variant="contained"
          color="primary"
          // onSubmit={handleOnSubmit}
          className="btn-escalate"
          type="submit"
        >
          Close
        </Button>
        {/* </div> */}
      </form>
    </div>
  );
}
