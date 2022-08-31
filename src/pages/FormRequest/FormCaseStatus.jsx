import { nanoid } from "nanoid";
import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import axios from "axios";

// "http://localhost:8001/api-help-desk/v1/sub-category/fetch";

export default function FormCaseStatus({
  formData,
  setFormData,
  Incident,
  Problem,
  Request,
  dataRequest,
  handleSubmit,
  name,
}) {
  let url = "http://localhost:8001/api-help-desk/v1/sub-category/fetch";

  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);

  const getCategory = async () => {
    try {
      const response = await axios
        .get("http://localhost:8001/api-help-desk/v1/category/fetch" || url, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("accessToken"),
          },
        })
        .then((response) => {
          console.log(response.data.body, "<<<<<<< access <<<<<");
          setCategory(response.data.body);
          setSubCategory(response.data.body);
        });
      console.log(response);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getCategory();
  }, []);

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

        {/* <div>
        <label for="inputPassword4" className="form-label">
          Case Owner :
        </label>
            <input
              type="text"
              className="form-control"
              id="inputPassword4"
              name="caseowner"
              value={formData.caseowner}
              onChange={(event) =>
                setFormData({ ...formData, 
                caseowner: event.target.value })
                }
              required
              />
        </div> */}

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
              setFormData({ ...formData, customer: event.target.value })
            }
          />
        </div>

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
              setFormData({ ...formData, senderName: event.target.value })
            }
          />
        </div> */}

        {/* <div>
          <label for="inputState" className="form-label">
            Sender Name : {senderNameid}
          </label>
          <select
            id="inputState"
            className="form-select"
            name="caseowner"
            required
            value={formData.senderName}
            onChange={(event) =>
              setFormData({ ...formData, senderName: event.target.value }) ||
              handleSenderName(event)
            }
          >
            {senderName.map((senderget) => (
              // request (hanya contoh) next diganti sendernameId
              <option key={senderget.requestId} value={senderget.requestId}>
                {senderget.senderName}
              </option>
            ))}
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
            {subSenderName.map((getsubsender) => (
              // requestId (hanya contoh) next diganti subsenderId
              <option key={getsubsender.requestId}>
                {getsubsender.requestId}
              </option>
            ))}
          </select>
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
            value={formData.categoryId}
            onChange={(event) =>
              setFormData({ ...formData, category: event.target.value })
            }
          >
            <option selected value="">
              Choose...
            </option>
            {category.map((item) => (
              <option key={item.categoryId} value={item.categoryId}>
                {item.categoryName}
              </option>
            ))}
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
            <option selected value="">
              Choose...
            </option>
            {subCategory.map((item) => (
              <option key={item.subCategoryId} value={item.subCategoryId}>
                {item.subCategoryName}
              </option>
            ))}
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
        {/* </div> */}

        {/* <form 
      className="row g-3"
    //   onSubmit={handleOnSubmit}
      > */}

        <div class="col">
          <label for="inputState" className="form-label">
            Case Status :
          </label>
          <select
            id="inputState"
            className="form-select"
            name="casestatus"
            required
            value={formData.casestatus}
            onChange={(event) =>
              setFormData({ ...formData, casestatus: event.target.value })
            }
          >
            <option selected>Choose...</option>
            <option value="open">New</option>
            <option value="inprogress">Working</option>
            <option value="resolved">Closed - Resolved</option>
            <option value="unresolved">Closed - Unresolved</option>
          </select>
        </div>

        <div></div>

        <Button
          variant="contained"
          color="primary"
          // onSubmit={handleOnSubmit}
          className="btn-escalate"
          type="submit"
        >
          Escalate
        </Button>

        {/* <div></div>   */}
      </form>

      {/* </form> */}
    </div>
  );
}
