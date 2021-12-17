<template>
  <div>
    <div id="desc">Add Courses</div>
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
        <div id="titleForm">
          <label for="titleText">Title</label>
          <input
            id="titleText"
            type="text"
            v-model="title"
            placeholder="For example: Hackaton, Odissey, etc."
            :class="{ 'is-invalid': submited && $v.title.$error }"
          />
        </div>
        <div id="text">
          <label for="textareaText">Link</label>
          <input
            id="textareaText"
            v-model="url"
            :class="{ 'is-invalid': submited && $v.url.$error }"
            placeholder="http:// | https://"
          />
        </div>
      </div>
    </div>
    <div id="control">
      <button
        @click="$emit('close')"
        :disabled="getIsUpdatingCourses(id) || getIsCreatingCourses"
      >
        Cancel
      </button>
      <button
        @click="save"
        :disabled="getIsUpdatingCourses(id) || getIsCreatingCourses"
        :style="{
          backgroundImage:
            getIsUpdatingCourses(id) || getIsCreatingCourses
              ? `url(${require('./../../assets/loader.gif')})`
              : 'unset'
        }"
      >
        {{ getIsUpdatingCourses(id) || getIsCreatingCourses ? "" : "Save" }}
      </button>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
import { required, helpers } from "vuelidate/lib/validators";

const { mapActions, mapGetters } = createNamespacedHelpers("courses");

export default {
  name: "ModalNews",
  data: function() {
    return {
      id: null,
      previewImage: null,
      image: null,
      title: null,
      url: null,
      createdCourses: {},
      submited: false
    };
  },
  props: {
    courses: Object
  },
  validations: {
    image: { required },
    title: { required },
    url: { required, regex: helpers.regex("http/https", /^http[s]?:\/\//) }
  },
  created() {
    if (this.courses) {
      this.id = this.courses.id;
      this.image = this.courses.image;
      this.title = this.courses.title;
      this.url = this.courses.url;
      this.previewImage = this.courses.image;
    }
  },
  computed: {
    ...mapGetters(["getIsUpdatingCourses", "getIsCreatingCourses"])
  },
  methods: {
    ...mapActions(["createCourses", "fetchCourses", "editCourses"]),

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
      this.createdCourses = {
        id: this.id,
        image: this.image,
        title: this.title,
        url: this.url
      };
      this.submited = true;
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }
      if (this.id) {
        try {
          let formData = new FormData();
          formData.append("id", this.createdCourses.id);
          if (typeof this.createdCourses.image !== "string") {
            formData.append("image", this.createdCourses.image);
          }
          formData.append("title", this.createdCourses.title);
          formData.append("url", this.createdCourses.url);
          await this.editCourses(formData);
          this.$emit("close");
          this.$toasted.success(
            `Course ' ${this.createdCourses.title} ' successfuly edited`,
            {
              theme: "bubble",
              icon: "check-circle",
              duration: 5000
            }
          );
        } catch (err) {
          this.$toasted.error(
            `Course ' ${this.createdCourses.title} ' doesn't edited, we have some trouble on server`,
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
          formData.append("id", this.createdCourses.id);
          formData.append("image", this.createdCourses.image);
          formData.append("title", this.createdCourses.title);
          formData.append("url", this.createdCourses.url);
          await this.createCourses(formData);
          this.$emit("close");
          this.$toasted.success(
            `Course ' ${this.createdCourses.title} ' successfuly added`,
            {
              theme: "bubble",
              icon: "check-circle",
              duration: 5000
            }
          );
        } catch {
          this.$toasted.error(
            `Course ' ${this.createdCourses.title} ' doesn't added, we have some trouble on server`,
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
  color: #505050;
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
    #titleForm {
      display: block;
      margin: 20px 0;
      label {
        color: #505050;
        padding-bottom: 1.5%;
        display: block;
        font-size: 18px;
        font-family: Helvetica;
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
      & + .is-invalid {
        box-shadow: 0 2px 4px 0 rgb(255, 2, 2) !important;
      }
      & + input {
        width: 100%;
        height: 26px;
        border: 1px solid #efefef;
        border-radius: 5px;
        padding-left: 10px;
        padding-right: 10px;
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
