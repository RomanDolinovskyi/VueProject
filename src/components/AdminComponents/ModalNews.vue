<template>
  <div>
    <div id="desc">Add News</div>
    <div id="root">
      <div id="photo">
        <label
          for="newsPhoto"
          :style="{ backgroundImage: 'url(' + previewImage + ')' }"
          :class="{ 'is-invalid': submited && $v.image.$error }"
        >
          <div id="noImg" v-if="!previewImage">
            <i class="far fa-images"></i>
          </div>
          <div id="noImgText" v-if="!previewImage">Choose Image</div>
          <div
            id="remove"
            v-if="previewImage"
            @click.stop.prevent="RemovePhoto"
          >
            -
          </div>
        </label>
        <input
          @change="UploadPhoto"
          id="newsPhoto"
          type="file"
          :style="'display: none'"
          ref="image"
          accept=".png, .jpg, .jpeg, .gif"
        />
      </div>
      <div id="data">
        <div id="date">
          <div id="calendar"><i class="far fa-calendar-alt"></i></div>
          <input
            @keypress="validateInput"
            v-model="day"
            type="number"
            placeholder="Day"
            :class="{ 'is-invalid': submited && $v.day.$error }"
            class="inputDate"
          />
          <input
            @keypress="validateInput"
            v-model="month"
            type="number"
            placeholder="Month"
            :class="{ 'is-invalid': submited && $v.month.$error }"
            class="inputDate"
          />
          <input
            @keypress="validateInput"
            v-model="year"
            type="number"
            placeholder="Year"
            :class="{ 'is-invalid': submited && $v.year.$error }"
            class="inputDate"
          />
        </div>
        <div id="titleForm">
          <div class="label-container">
            <label for="titleText">Title</label>
          </div>
          <input
            id="titleText"
            type="text"
            v-model="title"
            placeholder="For example: Hackaton, Odissey, etc."
            :class="{ 'is-invalid': submited && $v.title.$error }"
          />
        </div>
        <div id="text">
          <label for="textareaText">Text</label>
          <div :class="{ 'is-invalid': submited && $v.text.$error }">
            <v-md-editor
              left-toolbar="undo redo clear | h bold italic strikethrough | ul ol link fullscreen"
              right-toolbar="null"
              v-model="text"
              height="30vw"
            ></v-md-editor>
          </div>
        </div>
      </div>
    </div>
    <div id="control">
      <button
        @click="$emit('close')"
        :disabled="getIsUpdatingNews(id) || getIsCreatingNews"
      >
        Cancel
      </button>
      <button
        @click="save"
        :disabled="getIsUpdatingNews(id) || getIsCreatingNews"
        :style="{
          backgroundImage:
            getIsUpdatingNews(id) || getIsCreatingNews
              ? `url(${require('./../../assets/loader.gif')})`
              : 'unset'
        }"
      >
        {{ getIsUpdatingNews(id) || getIsCreatingNews ? "" : "Save" }}
      </button>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
import {
  required,
  minLength,
  maxLength,
  between
} from "vuelidate/lib/validators";

const { mapActions, mapGetters } = createNamespacedHelpers("news");

export default {
  name: "ModalNews",
  data: function() {
    return {
      id: null,
      previewImage: null,
      image: null,
      day: null,
      month: null,
      year: null,
      title: null,
      text: "",
      createdNews: {},
      submited: false
    };
  },
  props: {
    news: Object
  },
  validations: {
    image: { required },
    day: { required, between: between(1, 31) },
    month: { required, between: between(1, 12) },
    year: { required, minLength: minLength(4), maxLength: maxLength(4) },
    title: { required },
    text: { required }
  },
  created() {
    this.day = new Date().getDate();
    this.year = new Date().getFullYear();
    this.month = new Date().getMonth() + 1;
    if (this.news) {
      this.id = this.news.id;
      this.image = this.news.image;
      this.title = this.news.title;
      this.text = this.news.body;
      this.previewImage = this.news.image;
      this.day = new Date(this.news.date).getDate();
      this.year = new Date(this.news.date).getFullYear();
      this.month = new Date(this.news.date).getMonth() + 1;
    }
  },
  computed: {
    ...mapGetters(["getIsUpdatingNews", "getIsCreatingNews"])
  },
  methods: {
    ...mapActions(["createNews", "fetchNews", "editNews"]),

    validateInput: function(evt) {
      if (
        (evt.which != 8 && evt.which != 0 && evt.which < 48) ||
        evt.which > 57
      ) {
        evt.preventDefault();
      }
    },
    UploadPhoto: function(e) {
      const file = e.target.files[0];
      if (!file) {
        return;
      }
      this.image = file;
      this.previewImage = URL.createObjectURL(file);
    },
    RemovePhoto: function() {
      this.$refs.image.value = "";
      this.image = null;
      this.previewImage = null;
    },
    save: async function() {
      this.createdNews = {
        id: this.id,
        image: this.image,
        title: this.title,
        body: this.text,
        date: new Date(
          `${this.year}-${this.month}-${this.day} 02:00`
        ).toISOString()
      };
      this.submited = true;
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }
      if (this.id) {
        try {
          let formData = new FormData();
          formData.append("id", this.createdNews.id);
          if (typeof this.createdNews.image !== "string") {
            formData.append("image", this.createdNews.image);
          }
          formData.append("title", this.createdNews.title);
          formData.append("body", this.createdNews.body);
          formData.append("date", this.createdNews.date);
          await this.editNews(formData);
          this.$emit("close");
          this.$toasted.success(
            `News ' ${this.createdNews.title} ' successfuly edited`,
            {
              theme: "bubble",
              icon: "check-circle",
              duration: 5000
            }
          );
        } catch (err) {
          this.$toasted.error(
            `News ' ${this.createdNews.title} ' doesn't edited, we have some trouble on server`,
            {
              theme: "bubble",
              icon: "times",
              duration: 5000,
              action: [
                {
                  text: "OK",
                  onClick: (e, toastObject) => {
                    toastObject.goAway(0);
                  }
                }
              ]
            }
          );
        }
      } else {
        try {
          let formData = new FormData();
          formData.append("id", this.createdNews.id);
          formData.append("image", this.createdNews.image);
          formData.append("title", this.createdNews.title);
          formData.append("body", this.createdNews.body);
          formData.append("date", this.createdNews.date);
          await this.createNews(formData);
          this.$emit("close");
          this.$toasted.success(
            `News ' ${this.createdNews.title} ' successfuly added`,
            {
              theme: "bubble",
              icon: "check-circle",
              duration: 5000
            }
          );
        } catch {
          this.$toasted.error(
            `News ' ${this.createdNews.title} ' doesn't added, we have some trouble on server`,
            {
              theme: "bubble",
              icon: "times",
              duration: 5000,
              action: [
                {
                  text: "OK",
                  onClick: (e, toastObject) => {
                    toastObject.goAway(0);
                  }
                }
              ]
            }
          );
        }
      }
    }
  }
};
</script>

<style lang="scss">
.v-md-editor__toolbar-left + .v-md-editor__toolbar-right {
  margin-left: 0px !important;
}

#desc {
  padding-left: 7.5%;
  margin-top: 1.5%;
  font-family: Helvetica;
  font-size: 35px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.23;
  letter-spacing: normal;
  text-align: left;
}
#root #text label + textarea {
  border-color: #efefef;
}

#root {
  width: 85%;
  margin: 0 auto;
  display: flex;
  position: relative;
  margin-top: 1.5%;
  margin-bottom: 1.5%;

  #photo {
    width: 35%;
    .is-invalid {
      box-shadow: 0 2px 4px 0 rgb(255, 2, 2) !important;
    }
    label {
      position: relative;
      display: block;
      height: 24vw;
      border-radius: 5px;
      background-color: #efefef;
      background-size: cover;
      background-position: center;
      padding-top: 30%;
      #noImg {
        margin: auto;
        text-align: center;
        font-size: 8vw;
        background-size: cover;
        background-position: center;
        color: #c9c9c9;
      }
      #noImgText {
        font-family: HelveticaNeue;
        font-size: 1.8vw;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.2;
        letter-spacing: normal;
        text-align: center;
        color: #c9c9c9;
        margin-top: 1%;
      }
      #remove {
        position: absolute;
        top: 0;
        right: 0;
        height: 30px;
        width: 30px;
        line-height: 17px;
        text-align: center;
        background: #efefef;
        font-size: 60px;
        cursor: pointer;
        border-radius: 0 4px 0 5px;
        &:hover {
          background: #edbe3e;
        }
      }
      &:hover {
        cursor: pointer;
      }
    }
  }

  #data {
    padding-left: 3%;
    width: 70%;
    #date {
      display: flex;
      #calendar {
        height: 40px;
        width: 40px;
        font-size: 30px;
        color: #c9c9c9;
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
        & ~ .is-invalid {
          box-shadow: 0 2px 4px 0 rgb(255, 2, 2) !important;
        }
        & ~ .inputDate {
          width: 80px;
          margin: 0 15px;
          border: none;
          border-radius: 10px;
          // border-bottom: 1px solid #efefef;
          text-align: center;
          transition: 0.4s;
          &:focus {
            transition-timing-function: ease-out;
            // border-color: #edbe3e;
          }
        }
        & + .inputDate {
          margin-left: 10px;
        }
        & ~ .inputDate::-webkit-outer-spin-button,
        & ~ .inputDate::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
      }
    }
    #titleForm {
      display: block;
      margin: 20px 0;
      .label-container {
        label {
          color: #505050;
          padding-bottom: 1.5%;
          display: block;
          font-size: 18px;
          font-family: Helvetica;
        }
        & + .is-invalid {
          box-shadow: 0 2px 4px 0 rgb(255, 2, 2) !important;
        }
        & + input {
          width: 100%;
          height: 26px;
          border: 1px solid #efefef;
          border-radius: 5px;
          padding-left: 10px;
          transition: 0.4s;
          &:focus {
            transition-timing-function: ease-out;
            border-color: #edbe3e;
          }
        }
      }
    }
  }
  #text {
    display: block;
    label {
      padding-bottom: 1.5%;
      display: block;
      font-size: 18px;
      font-family: Helvetica;
      color: #505050;
      & + .is-invalid > div {
        box-shadow: 0 2px 4px 0 rgb(255, 2, 2) !important;
      }
      & + textarea {
        width: 100%;
        height: 10vw;
        // border: 1px solid #efefef;
        border-radius: 5px;
        padding-left: 10px;
        padding-right: 10px;
        padding-top: 8px;
        resize: none;
        transition: 0.4s;
        font-family: Helvetica;
        &:focus {
          transition-timing-function: ease-out;
          border-color: #edbe3e;
        }
      }
    }
  }
}
#control {
  display: flex;
  justify-content: flex-end;
  padding: 0px 7.5% 20px 0;
  button {
    background-color: #edbe3e;
    width: 100px;
    height: 35px;
    border-radius: 5px;
    color: white;
    border: none;
    font-family: Helvetica;
    font-size: 17px;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: normal;
    margin: 0 0px 0px 20px;
    cursor: pointer;
    background-position: center;
    background-size: 30%;
    background-repeat: no-repeat;
  }
  & > :first-child {
    background-color: #505050;
    &:disabled {
      opacity: 0.5;
    }
  }
}
</style>
