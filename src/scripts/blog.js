const blog = () => {
    const pickers = document.querySelectorAll('[data-tag-picker]')
    const posts = document.querySelectorAll('[data-post-tag]')
    let activeTag = document.querySelector('[data-active="true"]')

    
    const addUrlParams = (tag) =>{
        const url = new URL(window.location)
        if(tag !== "all"){
            url.searchParams.set('categorie',tag)
        }
        else{
            url.searchParams.delete('categorie')

        }
        window.history.pushState({},'',url)
    }

    const updateDisplay = (tag) => {
        posts.forEach(post => {
            post.classList.remove('hidden')
            if (tag === "all") {
                post.classList.remove('hidden')
                return
            }
            if (post.dataset.postTag !== tag) {
                post.classList.add('hidden')
                return
            }
        })
    }
    const update = (picker) =>{
        updateDisplay(picker.dataset.tagPicker)
        addUrlParams(picker.dataset.tagPicker)
        setButtonActive(picker)
    }


    const setButtonActive = (button) => {
        activeTag.classList.remove('bg-primary-darker')
        activeTag.classList.remove('text-white')
        activeTag.classList.remove('border-primary-darker')

        activeTag.dataset.active = "false"
        activeTag = button

        button.dataset.active = "true"
        button.classList.add('bg-primary-darker')
        button.classList.add('text-white')
        button.classList.add('border-primary-darker')
    }

    pickers.forEach(picker => {
        picker.addEventListener('click', () => {
            update(picker)
        })
    })
    const currentUrl = new URL(window.location)
    if(currentUrl.searchParams.get('categorie')){
        const category = currentUrl.searchParams.get('categorie')
        const pickedButton = document.querySelector(`[data-tag-picker=${category}]`)
        update(pickedButton)
    }
    else{
        const pickedButton = document.querySelector(`[data-tag-picker=all]`)
        update(pickedButton)
    }



}

export default blog