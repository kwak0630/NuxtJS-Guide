<template>
	<div class="guide-wrap">
    <AsideNav/>
    <div class="guide-content">
      <h2 class="guide-title">Popup</h2>
      <div class="guide-box popup">
        <h3 class="guide-title2">Alert Popup</h3>
        <button type="button" class="guide-btn" @click="openPopup('alert1')">basic</button>
        <button type="button" class="guide-btn" @click="openPopup('alert2')">title</button>
        <button type="button" class="guide-btn" @click="openPopup('alert3')">button</button>
        <button type="button" class="guide-btn" @click="openPopup('alert4')">different class</button>

        <AlertPopup ref="alert1" @close="closePopup('alert1')">
          <template slot="content">
            <p><strong>주의!</strong></p><br/>
            <p>기본 본문 내용<br/>본문 내용 본문 내용 본문 내용 본문 내용</p>
          </template>
        </AlertPopup>
        
        <AlertPopup ref="alert2" @close="closePopup('alert2')">
          <template slot="header">알럿 팝업 타이틀</template>
          <template slot="content">
            <p><strong>주의!22</strong></p><br/>
            <p>본문 내용 본문 내용 본문 내용 본문 내용<br/>본문 내용 본문 내용 본문 내용 본문 내용</p>
          </template>
        </AlertPopup>

        <AlertPopup ref="alert3" @close="closePopup('alert3')">
          <template slot="content">
            <p>버튼 있을 때 ~</p>
            <p>본문 내용 본문 내용 본문 내용 본문 내용</p>
          </template>
          <template slot="buttons">
            <button type="button" @click="closePopup('alert3')">취소</button>
            <button type="button">확인</button>
          </template>
        </AlertPopup>

        <AlertPopup ref="alert4" type="pop-alert4" @close="closePopup('alert4')">
          <template slot="content">
            <p>Class 추가 버전</p>
            <p>pop-full 뒤에 type 붙은 거 확인 할 수 있음 !!!</p>
          </template>
          <template slot="buttons">
            <button type="button" @click="closePopup('alert4')">확인</button>
          </template>
        </AlertPopup>
      </div>

      <div class="guide-box popup">
        <h3 class="guide-title2">Full Popup</h3>
        <button type="button" class="guide-btn" @click="openPopup('full1')">basic</button>
        <button type="button" class="guide-btn" @click="openPopup('full2')">button</button>
        <button type="button" class="guide-btn" @click="openPopup('full3')">different class</button>
        
        <FullPopup ref="full1" @close="closePopup('full1')">
          <template slot="header">풀 팝업 타이틀</template>
          <template slot="content">
            <p>기본 본문 내용<br/>본문 내용 본문 내용 본문 내용 본문 내용</p>
          </template>
        </FullPopup>
        
        <FullPopup ref="full2" @close="closePopup('full2')">
          <template slot="header">풀 팝업 타이틀</template>
          <template slot="content">
            <p>버튼 있을 때 ~</p>
            <p>본문 내용 본문 내용 본문 내용 본문 내용</p>
          </template>
          <template slot="buttons">
            <button type="button" @click="closePopup('full2')">취소</button>
            <button type="button">확인</button>
          </template>
        </FullPopup>
        
        <FullPopup ref="full3" type="pop-full2" @close="closePopup('full3')">
          <template slot="header">풀 팝업 타이틀</template>
          <template slot="content">
            <p>Class 추가 버전</p>
            <p>pop-full 뒤에 type 붙은 거 확인 할 수 있음 !!!</p>
          </template>
          <template slot="buttons">
            <button type="button" @click="closePopup('full3')">확인</button>
          </template>
        </FullPopup>
      </div>
      
      <div class="guide-box popup">
        <h3 class="guide-title2">Bottom Popup</h3>
        <button type="button" class="guide-btn" @click="openPopup('bottom1')">basic</button>
        <button type="button" class="guide-btn" @click="openPopup('bottom2')">button</button>
        
        <BottomPopup ref="bottom1" @close="closePopup('bottom1')">
          <template slot="header">슬라이드 타이틀 팝업</template>
          <template slot="content">
            <p>기본 본문 내용<br/>본문 내용 본문 내용 본문 내용 본문 내용</p>
          </template>
        </BottomPopup>

        <BottomPopup ref="bottom2" @close="closePopup('bottom2')">
          <template slot="header">슬라이드 타이틀 팝업</template>
          <template slot="content">
            <p>내용은 길고 아래는 버튼</p>
            <p>본문 내용 본문 내용 본문 내용 본문 내용<br/>본문 내용 본문 내용 본문 내용 본문 내용<br/>본문 내용 본문 내용 본문 내용 본문 내용<br/>본문 내용 본문 내용 본문 내용 본문 내용<br/>본문 내용 본문 내용 본문 내용 본문 내용<br/>본문 내용 본문 내용 본문 내용 본문 내용<br/>본문 내용 본문 내용 본문 내용 본문 내용<br/>본문 내용 본문 내용 본문 내용 본문 내용<br/>본문 내용 본문 내용 본문 내용 본문 내용<br/>본문 내용 본문 내용 본문 내용 본문 내용<br/>본문 내용 본문 내용 본문 내용 본문 내용<br/>본문 내용 본문 내용 본문 내용 본문 내용<br/>본문 내용 본문 내용 본문 내용 본문 내용<br/>본문 내용 본문 내용 본문 내용 본문 내용<br/>본문 내용 본문 내용 본문 내용 본문 내용<br/>본문 내용 본문 내용 본문 내용 본문 내용<br/>본문 내용 본문 내용 본문 내용 본문 내용<br/>본문 내용 본문 내용 본문 내용 본문 내용<br/>본문 내용 본문 내용 본문 내용 본문 내용<br/>본문 내용 본문 내용 본문 내용 본문 내용<br/>본문 내용 본문 내용 본문 내용 본문 내용<br/>본문 내용 본문 내용 본문 내용 본문 내용<br/>본문 내용 본문 내용 본문 내용 본문 내용<br/>본문 내용 본문 내용 본문 내용 본문 내용<br/>본문 내용 본문 내용 본문 내용 본문 내용<br/>본문 내용 본문 내용 본문 내용 본문 내용<br/>본문 내용 본문 내용 본문 내용 본문 내용<br/>본문 내용 본문 내용 본문 내용 본문 내용<br/>본문 내용 본문 내용 본문 내용 본문 내용<br/>본문 내용 본문 내용 본문 내용 본문 내용</p>
          </template>
          <template slot="buttons">
            <button type="button" @click="closePopup('bottom2')">확인</button>
          </template>
        </BottomPopup>
      </div>
      
      <div class="guide-box popup">
        <h3 class="guide-title2">Toast Popup</h3>
        <button type="button" class="guide-btn" @click="openPopup('toast1')">basic</button>
        <button type="button" class="guide-btn" @click="openPopup('toast2')">motion</button>
        <button type="button" class="guide-btn" @click="openPopup('toast3')">different timeout</button>

        <ToastPopup ref="toast1">
          <template slot="content">
            <p>TOAST POPUP</p>
          </template>
        </ToastPopup>

        <ToastPopup ref="toast2" animationType="fade">
          <template slot="content">
            <p>FADE TOAST POPUP</p>
          </template>
        </ToastPopup>

        <ToastPopup ref="toast3" :timeout='15'>
          <template slot="content">
            <p>15's TOAST POPUP</p>
          </template>
        </ToastPopup>
      </div>
    </div>
  </div>
</template>

<script>
import AlertPopup from '@/components/Popup/AlertPopup.vue';
import FullPopup from '@/components/Popup/FullPopup.vue';
import ToastPopup from '@/components/Popup/ToastPopup.vue';
import BottomPopup from '@/components/Popup/BottomPopup.vue';

export default ({
  components : { 
    AlertPopup,
    FullPopup,
    ToastPopup,
    BottomPopup,
  },

  data() {
    return {
      alert1: false,
      alert2: false,
      alert3: false,
      alert4: false,
      full1: false,
      full2: false,
      bottom1: false,
      bottom2: false,
      toast1: false,
      toast2: false,
      toast3: false,
    }
  },
  methods: {
    openPopup(popupName) {
      if (this.$refs[popupName]) {
        this.$refs[popupName].open();
      }
    },
    closePopup(popupName) {
      if (this.$refs[popupName]) {
        this.$refs[popupName].close();
      }
    }
  }
})
</script>