console.log('js work')

const $wrapperProfileChoice = document.querySelector('.wrapper-profile-choice-role-session')
console.log($wrapperProfileChoice)

if ($wrapperProfileChoice) {
    $wrapperProfileChoice.addEventListener('click', async (event) => {
        if (event.target.hasAttribute('data-delete')) {
            const $session = event.target.closest("[data-id]")
            const { id } = $session.dataset;

            const response = await fetch(`/user/profile/${id}`, {
                method: "DELETE",
            })

            const status = response.status

            if (status === 200) {
                $session.remove()
            }
        }
    })
}