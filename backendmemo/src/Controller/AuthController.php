<?php

namespace App\Controller;

use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class AuthController extends AbstractController
{
    /**
     * @Route("/api/register", methods={"POST"})
     */
    public function register(Request $request, EntityManagerInterface $entityManager): JsonResponse
    {
        $data = json_decode($request->getContent(), true);

        // Create a new user instance
        $user = new User();
        $user->setEmail($data['email']);
        $user->setName($data['name']);
        $user->setLastname($data['lastname']);
        $user->setPassword(password_hash($data['password'], PASSWORD_BCRYPT)); // Hash the password

        // Persist the user to the database
        $entityManager->persist($user);
        $entityManager->flush();

        return new JsonResponse(['message' => 'User registered successfully'], 201);
    }
}
