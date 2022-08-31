// import { nanoid } from "nanoid";

const jenis = [
  {
    id: 1,
    jenis: "Data",
    subjenis: {
      delivery: "Delivery Status",
      nothp: "Tidak terima di HP",
    },
  },
  {
    id: 2,
    jenis: "Network",
    subjenis: {
      down: "Down",
      latency: "Latency",
    },
  },
  {
    id: 3,
    jenis: "Service",
    subjenis: {
        db : "DB",
        io : "IO",
        diamond : "Diamond ",
    },
  },
  {
    id: 4,
    jenis: "Request",
    subjenis: {
      newcustomer: "New Customer",
      newsender: "New Sender",
      newdb: "New DB",
    },
  },
  
];

export default jenis;
