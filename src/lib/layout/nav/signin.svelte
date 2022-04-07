<script>
  let id = "kogoome"
  let password = "cksdnjs86@"
  let message = "msg"
  const login = async()=>{
    const body = JSON.stringify({ id, password })
    console.log("보내기 전 바디데이터",body);
    const res = await fetch("/api/login",{
      method:"POST",
      body,
    }).then(res=>res.json())
    if(!res.id){
      message = "로그인 실패"
    } else {
      message = res.id+"님"
    }
  }
  let vaildId = ""
  const vaildationId = (id)=>{
    if(id.length < 4){ return "아이디는 4자 이상이어야 합니다." }
    return "유효"
  }
  let vaildPassword = "영문, 숫자, 특수문자 포함 8~16자리"
  const vaildationPw = (password)=>{
    const reg = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/
    return reg.test(password)?"유효":"입력형식이 올바르지 않습니다."
  }
  $: vaildId = vaildationId(id)
  $: vaildPassword = vaildationPw(password)
  $: console.log(message) // 확인용 로그
</script>

<!-- The button to open modal -->
<label for="my-modal-5" class="btn modal-button btn-ghost">Log in</label>

<!-- Put this part before </body> tag -->
<input type="checkbox" id="my-modal-5" class="modal-toggle">
<div class="modal">
  <div class="modal-box w-11/12 max-w-3xl">
    <!-- 제목 -->
    <h3 class="font-bold text-3xl pb-5">Log in.</h3>
    <div class="flex justify-start gap-10">
      <!-- 왼쪽 인풋 -->
      <div class="w-1/2">
        <div class="form-control w-full">
          <div class="label">
            <span class="label-text">ID</span>
            <span class="label-text-alt">{vaildId}</span>
          </div>
          <input type="text" placeholder="Type here" class="input input-bordered w-full " bind:value={id}>
        </div>
        <div class="form-control w-full">
          <div class="label">
            <span class="label-text">password</span>
            <span class="label-text-alt">{vaildPassword}</span>
          </div>
          <input type="password" placeholder="Type here" class="input input-bordered w-full" bind:value={password} maxlength="16">
        </div>
        <div class="pt-6">
          <button class="btn btn-ghost w-full" on:click={login}>로그인</button>
        </div>
      </div>
      <!-- 오른쪽 구글 카카오-->
      <div class="w-1/2">
        <div class="form-control w-full">
          <div class="label ">
            <span class="label-text opacity-0">ID</span>
            <span class="label-text-alt">구글로 로그인</span>
          </div>
          <button class="btn bg-red-700 border-red-700">Google</button>
        </div>
        <div class="form-control w-full">
          <div class="label">
            <span class="label-text opacity-0">ID</span>
            <span class="label-text-alt">카카오로 로그인</span>
          </div>
          <button class="btn bg-yellow-500 border-yellow-500">Kakao</button>
        </div>
        <div class="pt-6 flex justify-between ">
          <button class="btn btn-ghost">회원가입</button>
          <button class="btn btn-ghost">비밀번호 찾기</button>
          <label for="my-modal-5" class="btn btn-ghost">닫기</label>
        </div>
      </div>
    </div>
    <!-- 하단 -->
  </div>
</div>