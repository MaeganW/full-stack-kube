# full-stack-kube

Full-stack Kubernetes project practice - Express NodeJs and React

## DockerHub Images

-   maeganwomble/react-pong
-   maeganwomble/node-pong

## To Manually Run in Docker

-   docker run -d -p 3001:3001 maeganwomble/node-pong
-   docker run -d -p 3000:3000 maeganwomble/react-pong

## To Run in Kubernetes

-   Have docker-desktop kubernetes installed
-   kubectl config get-contexts
-   kubectl config use-context docker-desktop
-   kubectl config get-contexts
-   Navigate to project root
-   kubectl apply -f k8s
-   Navigate to http://localhost:30001 for backend
-   Navigate to http://localhost:30002 for frontend

## Cleanup Deployments and Services

-   kubectl delete -f k8s
-   kubectl get all
