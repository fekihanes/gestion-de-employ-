<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Http\Response;
class usercontroller extends Controller
{
    public function getID(Request $request) {
        // Récupérer les informations de la requête
        $email = $request->input("email");
        $password = $request->input("password");
    
        // Recherche de l'utilisateur correspondant dans la base de données
        $user = User::where('email', $email)->first();
        if (is_null($user)) {
                return response()->json(-3);

        }
        if ($user->password=== $password) {
            return response()->json($user->id); // Retourne l'ID de l'utilisateur s'il existe
        }

        // Si aucun utilisateur ne correspond, retourner -1
        return response()->json(-1);
     }
    public function existe(Request $request) {
        // Récupérer les informations de la requête
        $email = $request->input("email");
        $password = $request->input("password");
    
        // Recherche de l'utilisateur correspondant dans la base de données
        $user = User::where('email', $email)->first();
        if (is_null($user)) {
                return response()->json(1);

        }
        return response()->json(-1);
     }

    public function adduser(Request $request) {
        $user = User::create($request->all());

        return response($user, 201);
    }
    public function suppruser(Request $request, $id) {
        $user = User::find($id);
    
        if (is_null($user)) {
            return response()->json(['message' => 'User not found'], 404);
        }
    
        $user->delete();
    
        return response($user, 204);
    }
}

