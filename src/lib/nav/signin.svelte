<!-- The button to open modal -->
<label for="my-modal-5" class="btn modal-button btn-ghost">Log in</label>

<!-- Put this part before </body> tag -->
<input type="checkbox" id="my-modal-5" class="modal-toggle">
<div class="modal">
  <div class="modal-box w-11/12 max-w-3xl">
    <h3 class="font-bold text-3xl pb-5">Log in.</h3>
    <div class="flex justify-start">
      <div class="w-1/2">
        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">ID</span>
            <span class="label-text-alt">Alt label</span>
          </label>
          <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs">
        </div>
        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">password</span>
            <span class="label-text-alt">Alt label</span>
          </label>
          <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs">
        </div>
      </div>
      <div class="w-1/2 pl-10">
        <div class="form-control w-full max-w-xs">
          <label class="label opacity-0">
            <span class="label-text">ID</span>
            <span class="label-text-alt">Alt label</span>
          </label>
          <button class="btn btn-primary">Google</button>
        </div>
        <div class="form-control w-full max-w-xs">
          <label class="label opacity-0">
            <span class="label-text">ID</span>
            <span class="label-text-alt">Alt label</span>
          </label>
          <button class="btn btn-secondary">Kakao</button>
        </div>
      </div>
    </div>
    <div class="pt-6 w-full flex">
      <div class="w-1/2 flex justify-start gap-4 ">
        <button class="btn btn-ghost">회원가입</button>
        <button class="btn btn-ghost">비밀번호 찾기</button>
        <button class="btn btn-ghost">로그인</button>
      </div>
      <div class="ml-auto">
        <label for="my-modal-5" class="btn btn-ghost">닫기</label>
      </div>
    </div>
  </div>
</div>