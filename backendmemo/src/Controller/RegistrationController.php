<?php

// src/Controller/Api/RegisterController.php

namespace App\Controller\Api;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\User;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;

class RegisterController extends AbstractController
{
    /**
     * @Route("/api/register", name="api_register", methods={"POST"})
     */
    public function register(
        Request $request, 
        UserPasswordHasherInterface $passwordHasher, 
        EntityManagerInterface $entityManager, 
        ValidatorInterface $validator
    ): JsonResponse {
        // Step 1: Get data from the request (assuming it's JSON)
        $data = json_decode($request->getContent(), true);
        
        $email = $data['email'] ?? null;
        $name = $data['name'] ?? null;
        $lastname = $data['lastname'] ?? null;
        $plainPassword = $data['password'] ?? null;

        // Step 2: Validate and process the input
        if (!$email || !$name || !$lastname || !$plainPassword) {
            return new JsonResponse(['error' => 'Missing fields'], JsonResponse::HTTP_BAD_REQUEST);
        }

        // Step 3: Create a new User entity
        $user = new User();
        $user->setEmail($email);
        $user->setName($name);
        $user->setLastName($lastname);
        
        // Hash the password
        $hashedPassword = $passwordHasher->hashPassword($user, $plainPassword);
        $user->setPassword($hashedPassword);

        // Step 4: Validate the entity (optional)
        $errors = $validator->validate($user);
        if (count($errors) > 0) {
            $errorMessages = [];
            foreach ($errors as $error) {
                $errorMessages[] = $error->getMessage();
            }
            return new JsonResponse(['errors' => $errorMessages], JsonResponse::HTTP_BAD_REQUEST);
        }

        // Step 5: Save the user to the database
        $entityManager->persist($user);
        $entityManager->flush();

        // Step 6: Return a success response
        return new JsonResponse(['message' => 'User registered successfully'], JsonResponse::HTTP_CREATED);
    }
}

