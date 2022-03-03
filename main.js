const notifyID = document.querySelector('#app');
const successBtn = document.querySelector('.btn-success')
const infoBtn = document.querySelector('.btn-info')
const WarningBtn = document.querySelector('.btn-warning')
const errorBtn = document.querySelector('.btn-error')



function start({ title = '', message = '', type = '', duration = 3000 }) {
    if (notifyID) {

        const notifyDIV = document.createElement('div')
        notifyDIV.classList.add('notify', `notify--${type}`)

        const icons = {
            success: 'fa-solid fa-circle-check',
            info: 'fa-solid fa-circle-info',
            warning: 'fa-solid fa-exclamation',
            error: 'fa-solid fa-triangle-exclamation'
        }

        const removeTime = setTimeout(() => {
            notifyID.removeChild(notifyDIV)

        }, duration + 1000)

        // click on close

        function closeBtn(e) {
            if (e.target.closest('.notify__close')) {
                notifyID.removeChild(notifyDIV)
                clearTimeout(removeTime)
            }
        }

        notifyDIV.addEventListener('click', closeBtn)

        const delays = (duration / 1000).toFixed(0)

        notifyDIV.style.animation = `silde ease-in .3s, fowardMS linear 1s ${delays}s forwards`

        notifyDIV.innerHTML = `
     
            <div class="notify__icon">
                <i class="${icons[type]}"></i>
            </div>
            <div class="notify__body">
                <h3 class="notify__title">${title}</h3>
                <p>${message}</p>
            </div>
            <div class="notify__close">
                <i class="fa-solid fa-xmark"></i>
            </div>
    
        `
        notifyID.appendChild(notifyDIV)

    }

};

function showSuccess() {
    start({
        title: 'Thành công',
        message: 'bạn đã đăng nhập thành công vào Trường Sơn',
        type: 'success',
        duration: 3000

    })
}

successBtn.addEventListener('click', showSuccess)

function showInfo() {
    start({
        title: 'Info',
        message: 'Facebook của mình là Trường Sơn Nhé!',
        type: 'info',
        duration: 3000
    })


}

infoBtn.addEventListener('click', showInfo)

function showWarning() {
    start({
        title: 'Cảnh báo',
        message: 'Bạn Vừa Kích Hoatj Tính Năng Cảnh Báo',
        type: 'warning',
        duration: 3000
    })

}

WarningBtn.addEventListener('click', showWarning)

function showError() {
    start({
        title: 'Có lỗi !',
        message: 'Có lỗi xảy ra vui lòng liên hệ quản trị viên!',
        type: 'error',
        duration: 3000
    })

}

errorBtn.addEventListener('click', showError)