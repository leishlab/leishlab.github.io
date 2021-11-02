<template>
  <header
    :class="headerClassList"
    class="sticky h-16 top-0 w-full bg-gray-900 z-50 flex justify-center"
  >
    <div
      class="flex-1 flex w-full justify-between px-6 items-center lg:p-0"
    >
      <!--logo-->
      <NuxtLink :to='"/"' class="md:px-20">
        <Logo v-bind:color="logo_color"/>
      </NuxtLink>

      <!--navigation-->
      <nav
        class="w-full md:px-20 flex flex-auto flex-col items-end lg:w-1/2 lg:flex-row lg:items-center lg:h-full border-white"
      >
        <!--hidden hamburger button-->
        <button
          class="flex items-center text-white mt-1 lg:hidden"
          @click.prevent.stop="onToggleClick"
          aria-label="Menu"
        >
          <svg
            class="fill-current h-6 w-6"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
        <ul
          :class="navContentClassList"
          class="px-6 absolute bg-gray-900 w-full top-16 left-0 right-0 list-reset lg:flex lg:static lg:justify-end lg:px-0 lg:h-full"
        >
          <li
            class="tracking-wider w-full lg:w-auto lg:ml-5 lg:h-full lg:flex lg:items-center"
            v-for="item in menus"
            :key="item.id"
          >
            <NuxtLink
              class="text-base text-right font-medium text-white hover:border-white hover:text-gray-200"
              :to="'/' + item.page"
              >{{ item.text }}</NuxtLink
            >
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import Logo from '@/components/logo';
export default {
  name: "Header",
  components:{
        Logo
  },
  data() {
    return {
      logo_color: '#ffffff',
      scrollY: 0,
      isOpen: false,
      menus: [
        {
          id: 1,
          text: "Bio",
          page: "bio"
        },
        {
          id: 2,
          text: "Research",
          page: "research"
        },
        {
          id: 3,
          text: "Publications",
          page: "publications"
        },
        {
          id: 4,
          text: "Team",
          page: "team"
        },
        {
          id: 5,
          text: "Contact",
          page: "contact"
        },
      ]
    };
  },

  computed: {
    isSticky() {
      return this.scrollY > 10;
    },
    headerClassList() {
      return this.isSticky ? "shadow" : "";
    },
    navActionClassList() {
      return this.isSticky ? "text-white" : "text-gray-900";
    },
    navContentClassList() {
      let classList = this.isSticky ? "bg-gray-100" : "bg-gray-100";

      if (!this.isOpen) {
        classList += ` hidden`;
      }

      return classList;
    }
  },

  methods: {
    onClick() {
      this.isOpen = false;
    },
    onScroll() {
      this.scrollY = window.scrollY;
    },
    onToggleClick() {
      this.isOpen = !this.isOpen;
    }
  },
  mounted() {
    this.scrollY = window.scrollY;
    document.addEventListener("click", this.onClick);
    document.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy() {
    document.removeEventListener("click", this.onClick, true);
    document.removeEventListener("scroll", this.onScroll, true);
  }
}
</script>
