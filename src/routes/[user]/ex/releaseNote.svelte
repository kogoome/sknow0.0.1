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
        ghostClass: 'bg-secondary',
        touchStartThreshold: 10,
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

<div bind:this={todo} class="flex flex-row w-full p-10 gap-2 overflow-y-auto">
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
      <li class="active:bg-secondary"></li>
    </ul>
    <div class="title text-white px-2 bg-neutral hover:bg-secondary text-xl text-center">
      <span class="">human3</span>
    </div>
    <ul class="content">
      <li class="active:bg-secondary">releaseNote 페이지 작성</li>
      <li class="active:bg-secondary">sortablejs 반영</li>
      <li class="active:bg-secondary">data 구조 만들기 아직 못함</li>
    </ul>
  </div>

  <div class="basis-1/4 complete">
    <div class="text-center text-2xl">Complete</div>

    <div class="title text-white px-2 bg-neutral hover:bg-secondary text-xl text-center">
      <span class="">22.4.9</span>
    </div>
    <ul class="content">
      <li class="active:bg-secondary">회원 가입, 로그인 성공</li>
      <li class="active:bg-secondary">세션완성</li>
      <li class="active:bg-secondary">네비바에 회원가입 로그인 => 계정 클릭메뉴</li>
      <li class="active:bg-secondary"></li>
      <li class="active:bg-secondary"></li>
      <li class="active:bg-secondary"></li>
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
      <li class="active:bg-secondary">ing</li>
    </ul>
  </div>
</div>
