<template>
  <div>
    <div class="element-entrant">
      <div class="title-entrant"><span>Bakalavr</span></div>
      <div class="item-entrant">
        <div id="item" class="form-of-education">
          <input placeholder="Form of education" type="text" />
        </div>

        <div id="item" class="training-period">
          <input placeholder="Training period" type="text" />
        </div>

        <div id="item" class="budget-places">
          <input placeholder="Budget places" type="text" />
        </div>

        <div id="item" class="price">
          <input placeholder="Price" type="text" />
        </div>
      </div>

      <div class="contauner-button">
        <div class="button">Save</div>
      </div>
    </div>

    <div class="element-entrant">
      <div class="title-entrant"><span>Magistracy</span></div>
      <div class="item-entrant">
        <div id="item" class="form-of-education">
          <input placeholder="Form of education" type="text" />
        </div>

        <div id="item" class="training-period">
          <input placeholder="Training period" type="text" />
        </div>

        <div id="item" class="budget-places">
          <input placeholder="Budget places" type="text" />
        </div>

        <div id="item" class="price">
          <input placeholder="Price" type="text" />
        </div>
      </div>

      <div class="contauner-button">
        <div class="button">Save</div>
      </div>
    </div>

    <div class="element-entrant">
      <div class="title-entrant"><span>Graduate studies</span></div>
      <div class="item-entrant">
        <div id="item" class="form-of-education">
          <input placeholder="Form of education" type="text" />
        </div>

        <div id="item" class="training-period">
          <input placeholder="Training period" type="text" />
        </div>

        <div id="item" class="price">
          <input placeholder="Price" type="text" />
        </div>
      </div>

      <div class="contauner-button">
        <div class="button">Save</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdminManageEntrant",
};
</script>

<style lang="scss">
.element-entrant {
  width: 96%;
  margin: 0 auto;

  .title-entrant {
    width: 100%;
    padding-bottom: 1%;

    span {
      color: #838383;
      font-size: 2vw;
      font-weight: bold;
    }
  }

  .item-entrant {
    display: flex;

    #item {
      width: 25%;
      padding-left: 3%;

      input {
        width: 80%;
        height: 100%;
        border: none;
        border-bottom: 1px solid;
        border-color: #e1e1e1;
        padding-bottom: 2%;
        font-size: 1.4vw;
        transition: 0.4s;

        &:focus {
          transition-timing-function: ease-out;
          border-color: #edbe3e;
        }
      }

      input[type="text"]::-webkit-input-placeholder {
        color: #d5d5d5;
        font-size: 1.2vw;
      }
    }
  }

  .contauner-button {
    width: 96%;
    margin: 0 auto;
    display: flex;
    justify-content: flex-end;

    .button {
      width: 9.5%;
      background-color: #edbe3e;
      border-radius: 5px;
      padding-top: 0.4%;
      padding-bottom: 0.4%;
      margin-bottom: 1%;
      margin-top: 2%;
      margin-right: 2.5%;
      transition: 0.2s;

      text-align: center;
      font-weight: bold;
      font-size: 1.1vw;
      color: white;

      &:hover {
        cursor: pointer;
        transition-timing-function: ease-out;
        width: 10%;
      }
    }
  }
  }
</style>
