<template>
  <div class="text-left my-10 md:my-24 container bg-green-100 mx-auto flex flex-col md:flex-row shadow-sm overflow-hidden">
    <div class="md:w-1/2">
        <div class="flex flex-col h-full relative">
            <div class="absolute top-0 left-0 mt-3 ml-4 md:mt-10 md:ml-12">
                <svg xmlns="http://www.w3.org/2000/svg" class="text-teal-200 fill-current w-12 h-12 md:w-16 md:h-16" viewBox="0 0 24 24"><path d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L9.758 4.03c0 0-.218.052-.597.144C8.97 4.222 8.737 4.278 8.472 4.345c-.271.05-.56.187-.882.312C7.272 4.799 6.904 4.895 6.562 5.123c-.344.218-.741.4-1.091.692C5.132 6.116 4.723 6.377 4.421 6.76c-.33.358-.656.734-.909 1.162C3.219 8.33 3.02 8.778 2.81 9.221c-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539.017.109.025.168.025.168l.026-.006C2.535 17.474 4.338 19 6.5 19c2.485 0 4.5-2.015 4.5-4.5S8.985 10 6.5 10zM17.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L20.758 4.03c0 0-.218.052-.597.144-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.317.143-.686.238-1.028.467-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.944-.33.358-.656.734-.909 1.162C14.219 8.33 14.02 8.778 13.81 9.221c-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539.017.109.025.168.025.168l.026-.006C13.535 17.474 15.338 19 17.5 19c2.485 0 4.5-2.015 4.5-4.5S19.985 10 17.5 10z"/></svg>
            </div>
            
            <div class="h-full relative px-16 py-16">          
                <p class="font-sans text-teal-700 text-3xl">
                    <b>We built this!</b> Center this vertically pls. Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                </p>
               <button class="mt-8 bg-transparent hover:bg-teal-500 text-teal-700 font-semibold hover:text-white py-2 px-4 border border-teal-500 hover:border-transparent rounded">
                    View our project on NASA Space Apps >
                </button>
            </div>
        </div>
    </div>
    <div class="relative bg-green-700 w-full py-2 md:py-24 md:w-1/2 flex flex-col item-center justify-center">
        <div class="absolute top-0 left-0 w-16 h-16 md:w-40 md:h-40 md:ml-20 md:mt-24"></div>
        <div class="relative font-sans italic text-6xl px-6 md:py-6 md:px-1 md:w-64 md:mx-auto text-yellow-400 font-bold leading-tight tracking-tight mb-0">
            <span class="md:block">You are not alone.</span>
        </div>
    </div>
</div>
</template>

<script>
    export default {
        name: "TeamFooter",
    };
</script>

<style scoped>
</style>
