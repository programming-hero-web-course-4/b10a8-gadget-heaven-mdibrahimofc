import { toast } from "react-toastify";

const getAddCartLIst = () => {
    // read-list
    const storedListStr = localStorage.getItem('cart');
    if (storedListStr) {
        const storedList = JSON.parse(storedListStr);
        return storedList;
    }
    else {
        return [];
    }
}

const addToCartList = (id) => {
    console.log(id);
    const storedList = getAddCartLIst();
    if (storedList.includes(id)) {
        // already exists. do not add it
        console.log(id, 'already exists in the read list')
        toast.warning('already exists in the cart')
    }
    else {
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('cart', storedListStr);
        // ideally trigger toast from the component
        toast('This product is added to your cart list')
    }
}

const getStoredWishList = () => {
    // read-list
    const storedWishListStr = localStorage.getItem('wish-list');
    if (storedWishListStr) {
        const storedWishList = JSON.parse(storedWishListStr);
        return storedWishList;
    }
    else {
        return [];
    }
}

const addToStoredWishList = (id) => {
    const storedWishList = getStoredWishList();
    if (storedWishList.includes(id)) {
        // already exists. do not add it
        console.log(id, 'already exists in the read list')
        toast.warning('already exists in the wish list')
    }
    else {
        storedWishList.push(id);
        const storedWishListStr = JSON.stringify(storedWishList);
        localStorage.setItem('wish-list', storedWishListStr);
        toast.success('You have successfully add to wish list')
    }
}

export { addToCartList, addToStoredWishList, getAddCartLIst, getStoredWishList }