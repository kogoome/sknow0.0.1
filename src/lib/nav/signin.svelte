<!-- The button to open modal -->
<label for="my-modal-5" class="btn modal-button btn-ghost">Log in</label>

<!-- Put this part before </body> tag -->
<input type="checkbox" id="my-modal-5" class="modal-toggle">
<div class="modal">
  <div class="modal-box w-11/12 max-w-3xl">
    <h3 class="font-bold text-3xl">Log in.</h3>
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
    <div class="pt-10 w-full flex">
      <div class="justify-start">
        <button class="btn btn-accent">비밀번호 찾기</button>
        <button class="btn btn-accent">회원가입</button>
      </div>
      <div class="ml-auto">
        <label for="my-modal-5" class="btn">닫기</label>
      </div>
    </div>
  </div>
</div>