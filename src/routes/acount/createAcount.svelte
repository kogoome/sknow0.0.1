<script>
  // 바인딩 변수
  let email = "test1@kakao.com"
  let id = "lion"
  let nickname = "lion"
  let password = "test0001@"
  let password2 = "test0001@"
  let message = "Lion" // 기본값 ""
  // 유효 메시지
  let vaildEmail = "고유값"
  let vaildId = "고유값"
  let vaildNickname = "중복가능"
  let vaildPassword = "문자 숫자 특수기호 8~16자리"
  let passwordConfirm = "일치여부"
  
  // 유효성 검사
  const vaildationEmail = (email)=>{
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    return reg.test(email)?"유효":"이메일 형식이 아닙니다."
  }
  const vaildationId = (id)=>{
    if(id.length < 4){ return "아이디는 4자 이상이어야 합니다." }
    return "유효"
  }
  const vaildationPw = (password)=>{
    const reg = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/
    return reg.test(password)?"유효":"영문, 숫자, 특수문자 포함 8~16자리"
  }
  const pwConfirm = (password, password2)=>{
    if(password != password2){ return "비밀번호가 일치하지 않습니다." }
    if(vaildPassword=="유효"){ return "일치" }
    else { return "비밀번호가 입력되지 않았습니다." }
  }

  // 계정 추가 post
  const createAcount = async()=>{
    if (vaildEmail='유효'&&vaildId=='유효'&&passwordConfirm=='일치'){
      const body = JSON.stringify({ email, id, nickname, password2 })
      const res = await fetch("/api/acount/createAcount",{
        method:"POST",
        body,
      }).then(res=>res.json()).catch(err=>console.log(err))
      if(!res.resid){
        message = "로그인 실패"
      } else {
        message = res.resid
      }
    } else {
      console.log("유효성 검사 실패")
    }
  }

  // 변수 변경 이벤트
  $: vaildEmail = vaildationEmail(email)
  $: vaildId = vaildationId(id)
  $: vaildPassword = vaildationPw(password)
  $: passwordConfirm = pwConfirm(password, password2)
  const jwtGoogle = ()=> {
    
  }
  const jwtKakao = ()=> {

  }
</script>

<svelte:head>
  <title>Create acount</title>
</svelte:head>

<div class="flex flex-col justify-center h-screen">
  <div class="flex flex-col justify-center bg-orange-50 h-1/2">
  <div class="flex justify-center">
      <div class="w-1/2">
        {#if message==""}
          <div id="formInput">
            <!-- 제목 -->
            <h3 class="font-bold text-3xl pb-5">Create acount.</h3>
            <div class="flex justify-start gap-10">
              <!-- 왼쪽 인풋 -->
              <div class="w-1/2">
                <!-- 이메일 입력 -->
                <div class="form-control w-full">
                  <div class="label">
                    <span class="label-text">E-mail</span>
                    <span class="label-text-alt">{vaildEmail}</span>
                  </div>
                  <input type="text" placeholder="Type here" class="input input-bordered w-full " bind:value={email}>
                </div>
                <!-- 아이디 입력 -->
                <div class="form-control w-full">
                  <div class="label">
                    <span class="label-text">ID</span>
                    <span class="label-text-alt">{vaildId}</span>
                  </div>
                  <input type="text" placeholder="Type here" class="input input-bordered w-full " bind:value={id}>
                </div>
                <!-- 비밀번호 입력 -->
                <div class="form-control w-full">
                  <div class="label">
                    <span class="label-text">password</span>
                    <span class="label-text-alt">{vaildPassword}</span>
                  </div>
                  <input type="password" placeholder="Type here" class="input input-bordered w-full" bind:value={password} maxlength="16">
                </div>
                <!-- 비밀번호 확인 -->
                <div class="form-control w-full">
                  <div class="label">
                    <span class="label-text">confirm</span>
                    <span class="label-text-alt">{passwordConfirm}</span>
                  </div>
                  <input type="password" placeholder="Type here" class="input input-bordered w-full" bind:value={password2} maxlength="16">
                </div>
              </div>
              <!-- 오른쪽 구글 카카오-->
              <div class="w-1/2">
                <div class="form-control w-full">
                  <div class="label">
                    <span class="label-text">nickname</span>
                    <span class="label-text-alt">{vaildNickname}</span>
                  </div>
                  <input type="text" placeholder="Type here" class="input input-bordered w-full " bind:value={nickname}>
                </div>
                <div class="form-control w-full">
                  <div class="label ">
                    <span class="label-text opacity-0">ID</span>
                    <span class="label-text-alt">구글로 가입</span>
                  </div>
                  <button class="btn bg-red-700 border-red-700">Google</button>
                </div>
                <div class="form-control w-full">
                  <div class="label">
                    <span class="label-text opacity-0">ID</span>
                    <span class="label-text-alt">카카오로 가입</span>
                  </div>
                  <button class="btn bg-yellow-500 border-yellow-500">Kakao</button>
                </div>
                <div class="pt-9">
                  <button class="btn btn-outline w-full" on:click={createAcount}>회원가입</button>
                </div>
              </div>
            </div>
            <!-- 하단 -->
          </div>
          {:else}
            <div id="createComplete">
              <div class="text-center">
                <h1 class="text-3xl p-10">Hello <span class="text-orange-400">'{message}'</span></h1>
                <button class="btn btn-ghost w-full"><a href="/acount/login">로그인 페이지로 이동</a></button>
              </div>
            </div>
        {/if}
      </div>
    </div>
  </div>
  <div class="h-28 w-full"></div>
</div>