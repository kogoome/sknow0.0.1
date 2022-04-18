<script>
  import Sortable from 'sortablejs';
  import { onMount } from 'svelte'
  let todo = null
  onMount(() => {
    const ul = todo.querySelectorAll('.content')
    ul.forEach(ulElement=>{
      Sortable.create(ulElement, {
        group: 'dashboard',
        animation: 100,
        sort:true,
      })
    })
  })

  let releaseNote = {
    Todo: [
      {
        day: 0,
        ver: '0.0.0',
        content: '내용',
      },
    ],
    Process: [
      {
        day: '제목',
        content: '내용',
      },
    ],
    Complete: [
      {
        title: '제목',
        content: '내용',
      },
    ],
    Learn: [
      {
        content: '내용',
      },
    ],
  }
</script>

<div bind:this={todo} class="contentRoot flex flex-row w-full p-10 gap-2">
  <div class="basis-1/4 todo">
    <div class="text-center text-2xl">Todo</div>
    <div class="title text-white px-2 bg-neutral hover:bg-secondary text-xl text-center">
      <span class="">goal</span>
    </div>
    <ul class="content">
      <li class="active:bg-secondary">웹앱 구축</li>
      <li class="active:bg-secondary">어플 구축 flutter, svelte native?</li>
      <li class="active:bg-secondary">데탑앱 구축 eletron</li>
      <li class="active:bg-secondary">노드 엣지 디비구성</li>
      <li class="active:bg-secondary">노드 입력 프론트 작성</li>
    </ul>
    <div class="title text-white px-2 bg-neutral hover:bg-secondary text-xl text-center">
      <span class="">x.y.0</span>
    </div>
    <ul class="content">
      <li class="active:bg-secondary">칸반보드로 기획하기</li>
      <li class="active:bg-secondary">테이블 형식과 데이터를 분리</li>
      <li class="active:bg-secondary">기획서를 클릭하면 해당 문서로 이동</li>
      <li class="active:bg-secondary">큰기획서엔 방향성과 중간기획을 기제</li>
      <li class="active:bg-secondary">팀장 컨펌시 세부항목 중간기획으로 확정, 이동</li>
    </ul>
    <div class="title text-white px-2 bg-neutral hover:bg-secondary text-xl text-center">
      <span class="">0.x.y</span>
    </div>
    <ul class="content">
      <li class="active:bg-secondary">팀장들이 중간기획에서 업무분장</li>
      <li class="active:bg-secondary">컨펌시 리스트 말미에 해당 팀장 미니프로필 등록</li>
      <li class="active:bg-secondary">각 팀장이 세부항목 구축</li>
      <li class="active:bg-secondary">사원컨펌시 세부항목으로 등록</li>
    </ul>
    <div class="title text-white px-2 bg-neutral hover:bg-secondary text-xl text-center">
      <span class="">0.x.y</span>
    </div>
    <ul class="content">
      <li class="active:bg-secondary">세부항목 구현목록</li>
      <li class="active:bg-secondary">각 항목별 사원 프로필 등록</li>
      <li class="active:bg-secondary">해당 사원은 자기 프로세스로 갖고가서 작업</li>
    </ul>
  </div>

  <div class="basis-1/4 process">
    <div class="text-center text-2xl">Process</div>
    <div class="title text-white px-2 bg-neutral hover:bg-secondary text-xl text-center">
      <span class="">human1</span>
    </div>
    <ul class="content">
      <li class="active:bg-secondary">구조 기준을 직급사람?</li>
    </ul>
    <div class="title text-white px-2 bg-neutral hover:bg-secondary text-xl text-center">
      <span class="">human2</span>
    </div>
    <ul class="content">
      <li class="active:bg-secondary">뽀모도로 시계</li>
      <li class="active:bg-secondary">메모작성, 검색!!!</li>
      <li class="active:bg-secondary">제텔카스텐 서지</li>
      <li class="active:bg-secondary">시작페이지 스크롤 로딩 기능소개</li>
      <li class="active:bg-secondary">타입스크립트 리팩토링</li>
    </ul>
    <div class="title text-white px-2 bg-neutral hover:bg-secondary text-xl text-center">
      <span class="">4.18</span>
    </div>
    <ul class="content">
      <li class="active:bg-secondary">테일윈드로 accordion 작성. peer클래스는 아주 좋다</li>
      <li class="active:bg-secondary">node 쓰기 기능 필요</li>
      <li class="active:bg-secondary">edge 쓰기기능 필요</li>
      <li class="active:bg-secondary">edge 쓰고 나서 node 검색에 edge path 검색추가</li>
    </ul>
    <div class="title text-white px-2 bg-neutral hover:bg-secondary text-xl text-center">
      <span class="">4.19</span>
    </div>
    <ul class="content">
      <li class="active:bg-secondary">서치 모달 레이아웃 작성</li>
      <li class="active:bg-secondary"></li>
    </ul>
    
    
  </div>

  <div class="basis-1/4 complete">
    <div class="text-center text-2xl">Complete</div>
    <!-- complete insert here -->


    <div class="title text-white px-2 bg-neutral hover:bg-secondary text-xl text-center">
      <span class="">4.17</span>
    </div>
    <ul class="content">
      <li class="active:bg-secondary">search 페이지 작성중. </li>
      <li class="active:bg-secondary">search에 키워드 입력하여 검색, 엔터키작동인데 버튼 필요. 라벨이용하면 될듯 </li>
      <li class="active:bg-secondary">node 검색 </li>
      <li class="active:bg-secondary">node 가능성 여부에 관하여, </li>
      <li class="active:bg-secondary">쿼리의 필요성: 디비 사용량을 줄여주는듯 </li>
    </ul>

    <div class="title text-white px-2 bg-neutral hover:bg-secondary text-xl text-center">
      <span class="">22.4.16</span>
    </div>
    <ul class="content">
      <li class="active:bg-secondary">releaseNote 페이지 작성</li>
      <li class="active:bg-secondary">sortablejs 반영</li>
      <li class="active:bg-secondary">data 구조 만들기 아직 못함</li>
      <li class="active:bg-secondary">svelte-motion 사용해봄. </li>
      <li class="active:bg-secondary">이건 앱이 완성되면 적용해도 괜찮을듯</li>
    </ul>
    <div class="title text-white px-2 bg-neutral hover:bg-secondary text-xl text-center">
      <span class="">22.4.15</span>
    </div>
    <ul class="content">
      <li class="active:bg-secondary">문서작성페이지 ui 근본적인 문제발견</li>
      <li class="active:bg-secondary">화면 크기를 변경시키면 ui가 무너짐.</li>
      <li class="active:bg-secondary">relative absoute를 사용하지 않은 죄</li>
      <li class="active:bg-secondary">모바일 대응이 안됨</li>
      <li class="active:bg-secondary">해상도 대응도 안됨</li>
    </ul>
    <div class="title text-white px-2 bg-neutral hover:bg-secondary text-xl text-center">
      <span class="">22.4.14</span>
    </div>
    <ul class="content">
      <li class="active:bg-secondary">세로스크롤바 테마적용</li>
      <li class="active:bg-secondary">가로스크롤바에서 문제가 있음. 사용못하게</li>
      <li class="active:bg-secondary">dom 바인딩 예제 문서</li>
      <li class="active:bg-secondary">accordion 예제, 모듈화</li>
      <li class="active:bg-secondary">컴포넌트 속성 prop 사용</li>
    </ul>
    <div class="title text-white px-2 bg-neutral hover:bg-secondary text-xl text-center">
      <span class="">22.4.13</span>
    </div>
    <ul class="content">
      <li class="active:bg-secondary">마우스트랩 사용 실패, 바인딩키워드오류?</li>
      <li class="active:bg-secondary">스벨트 전용 마우스트랩 라이브러리 사용</li>
      <li class="active:bg-secondary">editorjs 예제 사용</li>
      <li class="active:bg-secondary">인풋박스 안에서는 마우스트랩 사용불가</li>
      <li class="active:bg-secondary">사이드바 모양 다시 잡기</li>
      <li class="active:bg-secondary">단축키 문제로 editorjs 사용 보류</li>
      <li class="active:bg-secondary">단축키 서치포커스, 메뉴버튼 작동</li>
    </ul>
    <div class="title text-white px-2 bg-neutral hover:bg-secondary text-xl text-center">
      <span class="">22.4.12</span>
    </div>
    <ul class="content">
      <li class="active:bg-secondary">문서작성페이지 ui레이아웃</li>
      <li class="active:bg-secondary">테마셀렉트</li>
      <li class="active:bg-secondary">tw-elements 충돌, 삭제-> 기능전환</li>
    </ul>
    <div class="title text-white px-2 bg-neutral hover:bg-secondary text-xl text-center">
      <span class="">22.4.10~11</span>
    </div>
    <ul class="content">
      <li class="active:bg-secondary">openbase 라이브러리 아이쇼핑</li>
      <li class="active:bg-secondary">목록 npm.md 파일로 작성</li>
    </ul>
    <div class="title text-white px-2 bg-neutral hover:bg-secondary text-xl text-center">
      <span class="">22.4.9</span>
    </div>
    <ul class="content">
      <li class="active:bg-secondary">회원 가입, 로그인 성공</li>
      <li class="active:bg-secondary">세션완성</li>
      <li class="active:bg-secondary">네비바에 회원가입 로그인 => 계정 클릭메뉴</li>
    </ul>

    <div class="title text-white px-2 bg-neutral hover:bg-secondary text-xl text-center">
      <span class="">22.4.8</span>
    </div>
    <ul class="content">
      <li class="active:bg-secondary">로그인 회원가입페이지 작성</li>
    </ul>

    <div class="title text-white px-2 bg-neutral hover:bg-secondary text-xl text-center">
      <span class="">22.4.7</span>
    </div>
    <ul class="content">
      <li class="active:bg-secondary">몽구스 스키마 작성</li>
      <li class="active:bg-secondary">유효성검사 함수작성</li>
      <li class="active:bg-secondary">몽구스 모델작성 디비연결 확인</li>
      <li class="active:bg-secondary">패스포트는 사용안함</li>
    </ul>

    <div class="title text-white px-2 bg-neutral hover:bg-secondary text-xl text-center">
      <span class="">22.4.6</span>
    </div>
    <ul class="content">
      <li class="active:bg-secondary">네비메뉴 정리 로그인 회원가입</li>
      <li class="active:bg-secondary">페이지 별 목표점 작성</li>
      <li class="active:bg-secondary">개인 작업공간 구조작성</li>
      <li class="active:bg-secondary">릴리즈페이지 작성</li>
      <li class="active:bg-secondary">로그인 모달 작성</li>
    </ul>

    <div class="title text-white px-2 bg-neutral hover:bg-secondary text-xl text-center">
      <span class="">22.4.5</span>
    </div>
    <ul class="content">
      <li class="active:bg-secondary">tailwind 추가</li>
      <li class="active:bg-secondary">웹 구조 및 아이콘 갖추기</li>
      <li class="active:bg-secondary">타이머 컴포넌트 작성</li>
    </ul>

    <div class="title text-white px-2 bg-neutral hover:bg-secondary text-xl text-center">
      <span class="">22.4.4</span>
    </div>
    <ul class="content">
      <li class="active:bg-secondary">프로젝트 셋팅</li>
      <li class="active:bg-secondary">user 디비구조 셋팅</li>
    </ul>

  </div>

  <div class="basis-1/4 learn">
    <div class="text-center text-2xl">Learn</div>
    <ul class="content">
      <li class="active:bg-secondary">canvas</li>
      <li class="active:bg-secondary">뽀모도로 시계 사이드바에 장착</li>
      <li class="active:bg-secondary">Electron</li>
      <li class="active:bg-secondary">Flutter</li>
      <li class="active:bg-secondary">스벨트 로딩</li>
    </ul>
  </div>
</div>
