document.addEventListener('alpine:init', () => {
    Alpine.data('home', () => ({
        speakers:[
            {
                name: 'Nehemiah Emmanuel',
                title: 'Backend Software Engineer @Faraday',
                topic: 'Beyond writing code: Becoming a world class professional',
                gender: 'male'
            },
            {
                name: 'Dogun Oghenekobiruo',
                title: 'Backend Software Engineer @Faraday',
                topic: 'Coding 101 (Grooming your tech skill)',
                gender: 'male'
            },
            {
                name: 'Buchi Michelle Okonicha',
                title: 'Software Engineer and co-founder of Africah',
                topic: 'Imposter syndrome and Techies',
                gender: 'female'
            },
            {
                name: 'Favour Occonor',
                title: 'Influencer at Google crowdsource and Google Local Guides',
                topic: 'About Google Crowdsource : Help AI and ML improve our culture in Google',
                gender: 'female'
            },
            {
                name: 'Memunat Manzuma',
                title: 'Mentor, SSA WTM,Founder, Kuagi Resources',
                topic: 'Google Workspace (Productivity and collaboration tools for all the ways we work)',
                gender: 'female'
            },
            {
                name: 'Precious Onyewuchi',
                title: 'Backend Engineer and a Technical Writer, Open Source Fan Girl',
                topic: 'Open source and your Tech Journey',
                gender: 'female'
            },
            {
                name: 'Saifur-Rahman Yusuf',
                title: 'Software Engineer',
                topic: 'Your mental health matters',
                gender: 'male'
            },
            {
                name: 'Nkeze Sylvester',
                title: 'Frontend Engineer, Sterling Bank',
                topic: 'Making your site come alive with animations',
                gender: 'male'
            },
        ],
        isMute: false,
        music: '',
        init() {
            this.$nextTick(() => {
                this.applyScrollToSpeakers()
                initFeatherIcon()
                this.observeAnimation('.text-blur')
                this.observeAnimation('.fade-left')
                this.observeAnimation('.object-show')
            })
        },
        loadMusic(){
            this.music = new Audio('../audio/music.mp3')
        },
        toggleMusic(){
            this.isMute = !this.isMute
            // this.music.addEventListener("canplaythrough", (event) => {
            //     /* the audio is now playable; play it if permissions allow */
            //     myAudioElement.play();
            //   });
        },
        applyScrollToSpeakers() {
            return addScrollTrigger()
        },
        observerHandler(entries,observer){
            entries.forEach((entry) => {
                if(entry.isIntersecting){
                    entry.target.classList.add('animate')
                    return observer.unobserve()
                }
            })
        },
        observeAnimation(element){
            const elems = document.querySelectorAll(element)
            elems.forEach((elem)=>{
                const observer = new IntersectionObserver(this.observerHandler)
                observer.observe(elem)
            })
        }
    }))
})

function addScrollTrigger() {
    gsap.registerPlugin(ScrollTrigger)
    const speaker_section = gsap.utils.toArray(".speaker_section")
    const speaker_container = document.querySelector(".speaker_container")
    gsap.to(speaker_section, {
        xPercent: -100 * (speaker_section.length - 1),
        ease: 'none',
        scrollTrigger: {
            trigger: speaker_container,
            pin: true,
            scrub: 1,
            snap: 1 / (speaker_section.length - 1),
            end() {
                return '+=' + speaker_container.offsetWidth
            },
        }
    })
}

function initFeatherIcon(){
    window.feather.replace()
}