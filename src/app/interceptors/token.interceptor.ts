import { HttpInterceptorFn } from '@angular/common/http';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {

  let token = localStorage.getItem("tinet_token")

  if (token){
    let cloneReq = req.clone({
      setHeaders: {
        'Authorization': "bearer " + token,
      },
    })
    return next(cloneReq)
  }

  return next(req);
};
