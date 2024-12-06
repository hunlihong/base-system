import Swal from "sweetalert2"

const useAlert = () => {
    const alertSuccess = async ({title, onSuccess}: { title?: string, onSuccess?: any }) => {
        await Swal.fire({
            position: "top-end",
            icon: "success",
            title,
            showConfirmButton: false,
            timer: 1500,
        })
        onSuccess && onSuccess();
    }

    return {alertSuccess}
}

export {useAlert}