<script>
  import {
    TooltipDefinition 
  } from "carbon-components-svelte";
</script>


<svelte:head>
  <link
  rel="stylesheet"
  href="https://unpkg.com/carbon-components-svelte/css/all.css"
  />
  <title>tailwind elements & carbon-components-svelte</title>
</svelte:head>





<div class="h-auto">
  <div class="flex justify-start h-full p-20">
    <div class="relative w-1/2 flex flex-col text-xl">
      <h1 class="text-3xl">UI page</h1> 
      <div> <a href="/">홈</a> </div>
      tw-elements
      <div> <a href="/ui/1">아코디언!!, 호버링 언더라인, 모달</a> </div>
      <div> <a href="/ui/2">섹션!!, 목차 누르면 가는거</a> </div>
      <div> <a href="/ui/3">노티피케이션!!, 일렬버튼, 가로세로카드</a> </div>
      <div> <a href="/ui/4">카드 + 겔러리</a> </div>
      <div> <a href="/ui/5">어코딩이랑 비슷한데 다른 컬랩스, 작은 드롭다운버튼!!</a> </div>
      <div> <a href="/ui/6">로그인 폼</a> </div>
      svelte-popperjs
      <div> <a href="/ui/7">호버팝업설명 몇개만</a> </div>
      carbon-component-svelte
      <div> <a href="/ui/8">카본컴포넌트</a> </div>

      <div> <a href="/ui/"></a> </div>
      <div> <a href="/ui/"></a> </div>
    </div>
    <div class="w-1/3">
      아름다운 툴팁 기능을 가졌다. 문서 작성 페이지는 온리 카본컴포넌트로 작성해야지
      <br><br>
      <TooltipDefinition
      tooltipText="IBM Corporate Headquarters is based in Armonk, New York."
      >
        Armonk
      </TooltipDefinition>

      <TooltipDefinition
        direction="bottom"
        align="end"
        tooltipText="IBM Corporate Headquarters is based in Armonk, New York."
      >
        Armonk
      </TooltipDefinition>
      <TooltipDefinition
        direction="top"
        align="start"
        tooltipText="IBM Corporate Headquarters is based in Armonk, New York."
      >
        Armonk
      </TooltipDefinition>
      <TooltipDefinition
        direction="top"
        align="start"
        tooltipText="IBM Corporate Headquarters is based in Armonk, New York."
      >
        Armonk
      </TooltipDefinition>
      <TooltipDefinition
        direction="top"
        align="start"
        tooltipText="IBM Corporate Headquarters is based in Armonk, New York."
      >
        Armonk
      </TooltipDefinition>
      <TooltipDefinition
        direction="top"
        align="start"
        tooltipText="IBM Corporate Headquarters is based in Armonk, New York."
      >
        Armonk
      </TooltipDefinition>
      <br><br>
      <div class="">
        써봄직한 도구들, <br>
        마우스트랩(키바인딩), 로대시, svelte-grid(드래그앤드롭 갤러리), sortablejs(드래그엔드롭 리스트. 흥미롭군) 스윗얼럿2, admin-lte(부트스트랩 대시보드), swifer(모바일 드래그 액션, 스크롤이나 넘기기, 부드러운 애니메이션), aos(애니메이션 스크롤) laxjs(고급짐) Choreographer-js(저렴) , 
        infinite-scroll, granim(그라디언트 배경 문자, 애플스러움), pikaso(캔바기능), frappe-gantt(대시보드 타임라인), balloon-css(순수css 툴팁), purejs-mousetip(마우스툴팁), smooth-scrollbar(부드러운 스크롤바), tsparticles(인터렉션 배경화면 장난감 스노우쓰면 괜찮을듯), svelte-tags-input(태그모양 잡아주는거), echarts(아파치재단에서 만든 차트), theme-change(테마변경 https://github.com/spences10/sveltekit-theme-switch/blob/main/src/routes/index.svelte)
      </div>
    </div>
  </div>
</div>

