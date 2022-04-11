
<style>
  /* Styles required only for the example above */
  .scrollspy-example {
    position: relative;
    height: 200px;
    overflow: auto;
  }

</style>

레이아웃 리셋이 있으면 목차 활성화 안댐 상위 css로 조절하는듯

<div class="grid grid-cols-3">
  <div class="col-span-2">
    <div data-bs-spy="scroll" data-bs-target="#scrollspy1" data-bs-offset="200" class="scrollspy-example">
      <section id="example-1">
        <h3 class="text-xl font-semibold pt-5 pb-3">Section 1</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore earum natus vel
          minima quod error maxime, molestias ut. Fuga dignissimos nisi nemo necessitatibus
          quisquam obcaecati et reiciendis quaerat accusamus numquam.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore earum natus vel
          minima quod error maxime, molestias ut. Fuga dignissimos nisi nemo necessitatibus
          quisquam obcaecati et reiciendis quaerat accusamus numquam.
        </p>
      </section>
      <section id="example-2">
        <h3 class="text-xl font-semibold pt-5 pb-3">Section 2</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore earum natus vel
          minima quod error maxime, molestias ut. Fuga dignissimos nisi nemo necessitatibus
          quisquam obcaecati et reiciendis quaerat accusamus numquam.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore earum natus vel
          minima quod error maxime, molestias ut. Fuga dignissimos nisi nemo necessitatibus
          quisquam obcaecati et reiciendis quaerat accusamus numquam.
        </p>
      </section>
      <section id="example-3">
        <h3 class="text-xl font-semibold pt-5 pb-3">Section 3</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore earum natus vel
          minima quod error maxime, molestias ut. Fuga dignissimos nisi nemo necessitatibus
          quisquam obcaecati et reiciendis quaerat accusamus numquam.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore earum natus vel
          minima quod error maxime, molestias ut. Fuga dignissimos nisi nemo necessitatibus
          quisquam obcaecati et reiciendis quaerat accusamus numquam.
        </p>
        <section id="example-sub-A">
          <h3 class="text-xl font-semibold pt-5 pb-3">Subsection A</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore earum natus vel
            minima quod error maxime, molestias ut. Fuga dignissimos nisi nemo necessitatibus
            quisquam obcaecati et reiciendis quaerat accusamus numquam.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore earum natus vel
            minima quod error maxime, molestias ut. Fuga dignissimos nisi nemo necessitatibus
            quisquam obcaecati et reiciendis quaerat accusamus numquam.
          </p>
        </section>
        <section id="example-sub-B">
          <h3 class="text-xl font-semibold pt-5 pb-3">Subsection B</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore earum natus vel
            minima quod error maxime, molestias ut. Fuga dignissimos nisi nemo necessitatibus
            quisquam obcaecati et reiciendis quaerat accusamus numquam.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore earum natus vel
            minima quod error maxime, molestias ut. Fuga dignissimos nisi nemo necessitatibus
            quisquam obcaecati et reiciendis quaerat accusamus numquam.
          </p>
        </section>
      </section>
      <section id="example-4">
        <h3 class="text-xl font-semibold pt-5 pb-3">Section 4</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore earum natus vel
          minima quod error maxime, molestias ut. Fuga dignissimos nisi nemo necessitatibus
          quisquam obcaecati et reiciendis quaerat accusamus numquam.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore earum natus vel
          minima quod error maxime, molestias ut. Fuga dignissimos nisi nemo necessitatibus
          quisquam obcaecati et reiciendis quaerat accusamus numquam.
        </p>
      </section>
    </div>
  </div>

  <div>
    <!-- Scrollspy -->
    <div id="scrollspy1" class="sticky-top pl-3 text-sm">
      <ul class="nav nav-pills menu-sidebar">
        <li class="py-1">
          <a class="nav-link" href="#example-1">Section 1</a>
        </li>
        <li class="py-1">
          <a class="nav-link" href="#example-2">Section 2</a>
        </li>
        <li class="py-1">
          <a class="nav-link" href="#example-3">Section 3</a>
          <ul class="nav flex-column pl-3">
            <li class="py-1">
              <a class="nav-link" href="#example-sub-A">Subsection A</a>
            </li>
            <li>
              <a class="nav-link" href="#example-sub-B">Subsection B</a>
            </li>
          </ul>
        </li>
        <li class="py-1">
          <a class="nav-link" href="#example-4">Section 4</a>
        </li>
      </ul>
    </div>
    <!-- Scrollspy -->
  </div>
</div>