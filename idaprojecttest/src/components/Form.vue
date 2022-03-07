<template>
  <div>
    <div>
      <div class="form_block">
        <div>
          <label for="product_name" class="require_round">Product name</label>
        </div>

        <input
          v-model="form.name"
          type="text"
          placeholder="Enter name product"
        />
        <p v-if="errors.nameError.length" class="error-message">
          This field is required
        </p>
      </div>
      <div class="form_block">
        <div>
          <label for="product_description">Product Description</label>
        </div>
        <textarea
          v-model="form.description"
          type="text"
          placeholder="Enter description"
          rows="4"
        ></textarea>
      </div>
      <div class="form_block">
        <div>
          <label for="Url to image" class="require_round">Url to image</label>
        </div>

        <input v-model="form.url" type="text" placeholder="Enter url" />
        <p v-if="errors.urlError.length" class="error-message">
          This field is required
        </p>
      </div>
      <div class="form_block">
        <div><label for="Price" class="require_round">Price</label></div>

        <input
          placeholder="Enter price"
          v-model="modelNumber"
          :type="indicatorChange ? 'number' : 'text'"
          @focus="indicatorChange = true"
          @blur="indicatorChange = false"
        />
        <p v-if="errors.priceError.length" class="error-message">
          This field is required and must be a number
        </p>
      </div>
      <div class="btn_block">
        <button class="btn" :disabled="!formValid" @click="addToItems">
          Add product
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      form: {
        name: null,
        price: '',
        url: null,
        description: null,
      },
      errors: {
        urlError: [],
        nameError: [],
        priceError: [],
      },
      indicatorChange: false,
    };
  },
  methods: {
    submitForm() {
      this.errors.urlError = [];
      this.errors.nameError = [];
      this.errors.priceError = [];
      if (!this.form.name) {
        this.errors.nameError.push("1");
      } else if (typeof this.form.price !== "number" || this.form.number <= 0) {
        this.errors.priceError.push("1");
      } else if (!this.form.url) {
        this.errors.urlError.push("1");
      } else {
        return true;
      }
    },
    ...mapActions(["ADD_TO_ITEMS"]),
    addToItems() {
      if (this.submitForm()) {
        this.ADD_TO_ITEMS({
          name: this.form.name,
          description: this.form.description,
          url: this.form.url,
          price: this.modelNumber,
        });
      }
    },
  },

  computed: {
    nameValid() {
      return this.form.name != null;
    },
    priceValid() {
      return this.modelNumber != '';
    },
    urlValid() {
      return this.form.url != null;
    },
    formValid() {
      return this.nameValid && this.priceValid && this.urlValid;
    },
    modelNumber: {
      get() {
        return this.indicatorChange
          ? this.form.price
          : this.form.price.toLocaleString("ru-RU")
      },
      set(value) {
        this.form.price = +value.replace(/\s/g, "");
      },
    },
  },
};
</script>

<style style="scope">
.form {
  text-align: left;
  padding: 10px 15px;
  background: white;
  border-radius: 2%;
}

label,
input,
textarea {
  width: calc(100% - 40px);
}

input,
textarea {
  color: rgb(173, 173, 173);
  box-shadow: 1px 2px 2px 1px rgb(226, 226, 226);
  border: 1px rgb(211, 210, 210);
  border-radius: 20px;
  border-width: 2px 4px;
  margin-top: 15px;
  margin-bottom: 10px;
  padding: 20px 15px;
  font-size: 15px;
}

input {
  border-radius: 10px;
}

textarea {
  resize: none;
}

.btn_block {
  text-align: center;
  margin-top: 20px;
  padding-right: 10px;
}

.btn {
  color: #bebebe;
  background: #eeeeee;
  border: 1px #eeeeee;
  border-radius: 10px;
  padding: 20px 0;
  width: 100%;
}

.require_round:after {
  content: "";
  position: absolute;
  transform: translate(-0px, -4px);
  width: 6px;
  height: 6px;
  background: red;
  border-radius: 50%;
}

.form_block,
.form_block,
.form_block {
  text-align: left;
}

.btn:valid {
  background: #7bae73;
  color: white;
}

.error-message {
  color: red;
  font-size: 10px;
  margin-top: 0;
}
</style>
