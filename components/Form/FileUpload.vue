<template>
  <!-- 썸네일 첨부파일 -->
  <div v-if="type === 'thumb'" class="file-type thumb">
    <label for="input-file2" class="btn-upload" v-if="images.length < 4"></label>
    <input type="file" id="input-file2" multiple  @change="onFileChange" />
  	<div class="img-box" v-if="images.length > 0">
      <div v-for="(image, key) in images" class="thumbnail">
        <button type="button" @click="removeImage(key)" class="btn-remove">
          &times;
        </button>
        <img v-bind:ref="'image' +parseInt( key )" /> 
      </div>
    </div>
  </div>

  <!-- 기본 첨부파일 -->
  <div v-else class="file-type">
    <label for="input-file" class="btn-upload"></label>
    <input type="file" id="input-file"  />
  </div> 
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      images: []
    }
  },
  methods: {
    onFileChange(e) {
      var files = e.target.files;
      for (let i=0; i < files.length; i++)
      {
        this.images.push(files[i]);
      }
      for (let i=0; i<this.images.length; i++)
      {
        let reader = new FileReader(); 
        reader.addEventListener('load', function() {
          this.$refs['image' + parseInt( i )][0].src = reader.result;
        }.bind(this), false); 

        reader.readAsDataURL(this.images[i]);
      }
	   // console.log(this.images);
    },
    removeImage (index) {
      this.images.splice(index, 1); // 이미지 제거
      // console.log(index);
    }
  }
}
</script>