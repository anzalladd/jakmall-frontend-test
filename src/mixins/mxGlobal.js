import DataStepper from "@/util/DataStepper";
import DataShipment from "@/util/DataShipment";
import DataPayment from "@/util/DataPayment";

export default {
  methods: {
    currencyFilter(value) {
      const formatter = new Intl.NumberFormat("id", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
      });

      const number = formatter.format(value);

      return number
        .replace(".", ",")
        .replace("Rp", "")
        .trim();
    },
  },
  computed: {
    dataStep() {
      return DataStepper;
    },

    dataShipment() {
      return DataShipment;
    },

    dataPayment() {
      return DataPayment;
    },

    randomString() {
      let result = "";
      let chars = "23456789ABCDEFGHJKLMNPQRSTUVWXYZ";
      for (let i = 5; i > 0; --i)
        result += chars[Math.floor(Math.random() * chars.length)];
      return result;
    },
  },
};
