<script>
  import {page} from '$app/stores'

  let idmail = "lion"
  let password = "test0001@"
  let message = $page.stuff.loginId || ""
  let vaildId = ""
  let vaildPassword = ""

  const vaildationId = (idmail)=>{
    if(idmail.length < 4){ return "아이디는 4자 이상이어야 합니다." }
    return "유효"
  }
  const vaildationPw = (password)=>{
    const reg = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/
    return reg.test(password)?"유효":"영문, 숫자, 특수문자 포함 8~16자리"
  }

  const login = async()=>{
    if (vaildationId(idmail)=='유효'&&vaildationPw(password)=='유효'){
      const emailreg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
      const isEmail = emailreg.test(idmail)
      const id = isEmail?"":idmail
      const email = isEmail?idmail:""
      const body = JSON.stringify({ id, email, password })
      const res = await fetch("/api/acount/setSession_login",{
        method:"POST",
        body,
      }).then(res=>res.json()).catch(err=>console.log(err))
      if(res.status==200){
        message = res.name
        window.location.href = `/${res.name}`
      } else {
        // TODO 로그인 실패 문구 띄워주기
        console.log("status 400")
      }
    }
  }

  $: vaildId = vaildationId(idmail)
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
      <div class="w-1/2">
        {#if message==""}
          <div id="forminput">  
            <!-- 제목 -->
            <h3 class="font-bold text-3xl pb-5">Log in.</h3>
            <div class="flex justify-start gap-10">
              <!-- 왼쪽 인풋 -->
              <div class="w-1/2">
                <div class="form-control w-full">
                  <div class="label">
                    <span class="label-text">ID or Email</span>
                    <span class="label-text-alt">{vaildId}</span>
                  </div>
                  <input type="text" placeholder="id or email" class="input input-bordered w-full " bind:value={idmail}>
                </div>
                <div class="form-control w-full">
                  <div class="label">
                    <span class="label-text">password</span>
                    <span class="label-text-alt">{vaildPassword}</span>
                  </div>
                  <input type="password" placeholder="password" class="input input-bordered w-full" bind:value={password} maxlength="16">
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
          {:else}
            <div id="createComplete">
              <div class="text-center">
                <h1 class="text-3xl p-10">Hello <span class="text-orange-400">'{message}'</span></h1>
              </div>
            </div>
        {/if}
      </div>
    </div>
  </div>
  <div class="h-28 w-full"></div>
</div>