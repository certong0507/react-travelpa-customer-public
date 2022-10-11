import React from 'react'

const MyProfile = React.lazy(() => import("./pages/dashboard/my_profile/MyProfile"))
const MyPurchase = React.lazy(() => import("./pages/dashboard/my_purchase/MyPurchase"))
const MyPurchaseDetails = React.lazy(() => import("./pages/dashboard/my_purchase_details/MyPurchaseDetails"))
const ChangePassword = React.lazy(() => import("./pages/dashboard/change_password/ChangePassword"))
const ChangeEmail = React.lazy(() => import("./pages/dashboard/change_email/ChangeEmail"))

const routes = [
    { path: 'my-profile', name: 'My Profile', element: MyProfile },
    { path: 'my-purchase', name: 'My Purchase', element: MyPurchase },
    { path: 'my-purchase/:id', name: 'My Purchase Detalis', element: MyPurchaseDetails },
    { path: 'change-password', name: 'Change Password', element: ChangePassword },
    { path: 'change-email', name: 'Change Email', element: ChangeEmail },
]

export default routes
