<?php
// src/Controller/AdminController.php
namespace App\Controller;

use App\Entity\User;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;

class AdminController extends AbstractController
{
    #[Route('/api/admin/users', name: 'admin_users', methods: ['GET'])]
    public function getUsers(EntityManagerInterface $em): JsonResponse
    {
        $users = $em->getRepository(User::class)->findAll();
        $userData = [];

        foreach ($users as $user) {
            $userData[] = [
                'id' => $user->getId(),
                'username' => $user->getUsername(),
                'status' => $user->getStatus(), // Assuming 'status' is a field in your User entity
            ];
        }

        return new JsonResponse($userData);
    }

    #[Route('/api/admin/users/{id}/approve', name: 'admin_approve_user', methods: ['PATCH'])]
    public function approveUser($id, EntityManagerInterface $em): JsonResponse
    {
        $user = $em->getRepository(User::class)->find($id);

        if (!$user) {
            return new JsonResponse(['error' => 'User not found'], 404);
        }

        $user->setStatus('approved'); // Assuming 'status' is a field in your User entity
        $em->flush();

        return new JsonResponse(['message' => 'User approved']);
    }

    #[Route('/api/admin/users/{id}', name: 'admin_delete_user', methods: ['DELETE'])]
    public function deleteUser($id, EntityManagerInterface $em): JsonResponse
    {
        $user = $em->getRepository(User::class)->find($id);

        if (!$user) {
            return new JsonResponse(['error' => 'User not found'], 404);
        }

        $em->remove($user);
        $em->flush();

        return new JsonResponse(['message' => 'User deleted']);
    }
}
