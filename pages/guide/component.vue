<template>
	<div class="guide-wrap">
    <AsideNav/>
    <div class="guide-content">
      <h2 class="guide-title">Component</h2>
      <div class="guide-box component">
        <h3 class="guide-title2">Tab</h3>
        <tabs>
          <tab name="Tab1" :selected="true">
            <p>Tab Tab Tab Tab</p>
          </tab>
          <tab name="Tab2">
            <p>Tab2<br/>Tab2Tab2Tab2Tab2Tab2Tab2Tab2Tab2Tab2Tab2</p>
          </tab>
        </tabs>
        <br/>
        <br/>
        <tabs>
          <tab name="Tab1" :count="10" :selected="true">
            <p>Count Tab</p>
          </tab>
          <tab name="Tab2">
            <p>Tab2<br/>Tab2Tab2Tab2Tab2Tab2Tab2Tab2Tab2Tab2Tab2</p>
          </tab>
          <tab name="Tab3" :count="2">
            <p>Tab3</p>
            <p>Tab3</p>
            <p>Tab3</p>
          </tab>
          <tab name="Tab4" :count="0">
            <p>Tab4</p>
          </tab>
        </tabs>
        <br/>
        <br/>
        <tabs type="v2">
          <tab name="Tab1">
            <p>Tab Type ~~! Tab Tab</p>
          </tab>
          <tab name="Tab2" :selected="true">
            <p>Tab Type ~~! Tab Tab<br/>Tab2Tab2Tab2Tab2Tab2Tab2Tab2Tab2Tab2Tab2</p>
          </tab>
        </tabs>
      </div>

      <div class="guide-box component">
        <h3 class="guide-title2">Accordion</h3>
        <!-- :selected="true" -->
        <Accordions>
          <Accordion name="Accordion title" >
            <p>
              Accordion Accordion Accordion Accordion Accordion Accordion Accordion Accordion Accordion Accordion Accordion Accordion
            </p>
          </Accordion>
          <Accordion name="Accordion title2">
            <p>
              Accordion Accordion Accordion
            </p>
          </Accordion>
          <Accordion name="Accordion title3">
            <p>
              Accordion Accordion Accordion Accordion Accordion Accordion Accordion Accordion Accordion Accordion Accordion Accordion
            </p>
            <p>
              Accordion Accordion Accordion Accordion Accordion Accordion Accordion Accordion Accordion Accordion Accordion Accordion
            </p>
            <p>
              Accordion Accordion Accordion Accordion Accordion Accordion Accordion Accordion Accordion Accordion Accordion Accordion
            </p>
          </Accordion>
        </Accordions>
      </div>
      
      <div class="guide-box component">
        <h3 class="guide-title2">Tool Tip</h3>
        <ToolTip >
          툴팁 내용 툴팁 내용<br/>
          기본은 position bottom left
        </ToolTip>
        <br/><br/>
        <ToolTip position="top right">
          툴팁 position top right
        </ToolTip>
        <br/><br/>
        <ToolTip position="right">
          툴팁 position bottom right
        </ToolTip>
        <br/><br/>
        <ToolTip position="top">
          툴팁 position top left
        </ToolTip>
      </div>
      
      <div class="guide-box component">
        <h3 class="guide-title2">No Data</h3>
        <NoData ico="nodata">
          <p>데이터가 없습니다.</p>
        </NoData>
        <br/>
        <NoData>
          <p>데이터가 없습니다. 아이콘 제외 버전</p>
        </NoData>
      </div>
      
      <div class="guide-box component component-btn">
        <h3 class="guide-title2">Buttons</h3>
        <TopButton />
        <BackButton />
      </div>

      <div class="guide-box component component-loading">
        <h3 class="guide-title2">Loading</h3>
        <Loading />
      </div>
      <div class="guide-box component">
        <h3 class="guide-title2">draggable</h3>
        <draggable
          class="drag-wrap list-group"
          :list="list1"
          :group="{ name: 'people', pull: 'clone', put: false }"
          @change="log"
        >
          <div
            class="drag-item"
            v-for="element in list1"
            :key="element.name"
          >
            {{ element.name }}
          </div>
        </draggable>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <draggable
          class="drag-wrap list-group"
          :list="list2"
          group="people"
          @change="log"
        >
          <div
            class="drag-item"
            v-for="element in list2"
            :key="element.name"
          >
            {{ element.name }}
          </div>
        </draggable>
      </div>
    </div>
  </div>
</template>

<script>
import Tabs from '@/components/Component/Tab/Tabs.vue';
import Tab from '@/components/Component/Tab/Tab.vue';
import Accordions from '@/components/Component/Accordion/Accordions.vue';
import Accordion from '@/components/Component/Accordion/Accordion.vue';
import NoData from '@/components/Component/NoData/NoData.vue';
import ToolTip from '@/components/Component/ToolTip/ToolTip.vue';
import TopButton from '@/components/Component/Button/TopButton.vue';
import BackButton from '@/components/Component/Button/BackButton.vue';
import Loading from '@/components/Component/Loading/Loading.vue';
import draggable from 'vuedraggable'

export default ({
  components : { 
    Tabs,
    Tab,
    Accordions,
    Accordion,
    NoData,
    ToolTip,
    TopButton,
    BackButton,
    Loading,
    draggable
  },
  data() {
    return {
      list1: [
        { name: "John", id: 1 },
        { name: "Joao", id: 2 },
        { name: "Jean", id: 3 },
        { name: "Gerard", id: 4 }
      ],
      list2: [
        { name: "Juan", id: 5 },
        { name: "Edgard", id: 6 },
        { name: "Johnson", id: 7 }
      ]
    };
  },
  methods: {
    log: function(evt) {
      window.console.log(evt);
    }
  }
})
</script>