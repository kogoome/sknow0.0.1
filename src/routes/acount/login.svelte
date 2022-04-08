<script>
  let id = "kogoome"
  let password = "cksdnjs86@"
  let message = "msg"

  let vaildId = ""
  const vaildationId = (id)=>{
    if(id.length < 4){ return "아이디는 4자 이상이어야 합니다." }
    return "유효"
  }
  let vaildPassword = ""
  const vaildationPw = (password)=>{
    const reg = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/
    return reg.test(password)?"유효":"영문, 숫자, 특수문자 포함 8~16자리"
  }

  const login = async()=>{
    if (vaildationId(id)=='유효'&&vaildationPw(password)=='유효'){
      console.log("유효성 검사 완료")
      const body = JSON.stringify({ id, password })
      const res = await fetch("/api/acount/login",{
        method:"POST",
        body,
      }).then(res=>res.json())
      if(!res.id){
        message = "로그인 실패"
      } else {
        message = res.id+"님"
      }
    }
  }

  $: vaildId = vaildationId(id)
  $: vaildPassword = vaildationPw(password)

  const jwtGoogle = ()=> {
    
  }
  const jwtKakao = ()=> {

  }
</script>

<svelte:head>
  <title>Login</title>
</svelte:head>


<div class="flex flex-col justify-center h-screen">
  <div class="flex flex-col justify-center bg-orange-50 h-1/2">
  <div class="flex justify-center">
      <div class="w-1/3">
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
              <button class="btn btn-ghost">비밀번호 찾기</button>
              <label for="my-modal-5" class="btn btn-ghost">닫기</label>
            </div>
          </div>
        </div>
        <!-- 하단 -->
      </div>
    </div>
  </div>
  <div class="h-28 w-full"></div>
</div>